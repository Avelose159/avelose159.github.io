import * as THREE from 'three';
import { gsap } from 'gsap';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

/* ==========================================
   1. 데이터 및 초기화 (Data & Initialization)
   ========================================== */
const planets = [];
const habits = JSON.parse(localStorage.getItem('my-habits')) || [
    { name: 'Wake up 06:00', checks: new Array(31).fill(false) },
    { name: 'Coding Engine', checks: new Array(31).fill(false) },
    { name: 'Gym', checks: new Array(31).fill(false) }
];

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg'), antialias: true });
const controls = new OrbitControls(camera, renderer.domElement);
const textureLoader = new THREE.TextureLoader();

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
camera.position.set(0, 0, 30);
controls.enableDamping = true;

/* ==========================================
   2. 3D 공간 구성 (Space & Planets)
   ========================================== */
const createStars = () => {
    const geo = new THREE.BufferGeometry();
    const pos = [];
    for (let i = 0; i < 3000; i++) pos.push((Math.random() - 0.5) * 200, (Math.random() - 0.5) * 200, (Math.random() - 0.5) * 200);
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    scene.add(new THREE.Points(geo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 })));
};
createStars();

scene.add(new THREE.AmbientLight(0xffffff, 0.6));
const sun = new THREE.DirectionalLight(0xffffff, 0.5); sun.position.set(10, 10, 10); scene.add(sun);

const addPlanet = (name, texture, size, pos, content) => {
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(size, 32, 32), new THREE.MeshStandardMaterial({ map: textureLoader.load(texture) }));
    mesh.position.set(pos.x, pos.y, pos.z);
    mesh.userData = { name, content };
    scene.add(mesh);
    planets.push(mesh);
};

addPlanet('Project (starkeeper)', '/textures/neptune.jpg', 2.0, { x: -15, y: 5, z: 10 }, 'Engine development logs.');
addPlanet('Studies', '/textures/mars.jpg', 1.8, { x: 5, y: -10, z: 5 }, 'C++ and Graphics study notes.');
addPlanet('HABIT TRACKER', '/textures/jupiter.jpg', 2.5, { x: 10, y: 10, z: -10 }, '');

/* ==========================================
   3. 상호작용 및 UI (Interaction & UI)
   ========================================= */
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const overlay = document.getElementById('content-overlay');

window.addEventListener('click', (e) => {
    if (!overlay.classList.contains('hidden')) return;
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1; mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const hit = raycaster.intersectObjects(planets)[0];
    if (hit) moveCamera(hit.object);
});

const moveCamera = (target) => {
    gsap.to(controls.target, { x: target.position.x, y: target.position.y, z: target.position.z, duration: 1.2 });
    gsap.to(camera.position, {
        x: target.position.x, y: target.position.y, z: target.position.z + target.geometry.parameters.radius * 3,
        duration: 1.2, onComplete: () => showUI(target.userData)
    });
};

const showUI = (data) => {
    const body = document.getElementById('post-body');
    body.innerHTML = '';
    if (data.name === 'HABIT TRACKER') renderHabitApp(body);
    else {
        document.getElementById('post-title').innerText = data.name;
        body.innerText = data.content;
    }
    overlay.classList.remove('hidden');
};

document.getElementById('close-btn').addEventListener('click', () => {
    overlay.classList.add('hidden');
    gsap.to(camera.position, { x: 0, y: 0, z: 30, duration: 1.2 });
    gsap.to(controls.target, { x: 0, y: 0, z: 0, duration: 1.2 });
});

/* ==========================================
   4. 해빗 트래커 앱 (Habit Tracker)
   ========================================== */
const renderHabitApp = (container) => {
    const now = new Date();
    const year = now.getFullYear();
    const monthName = now.toLocaleString('en-US', { month: 'long' });
    const day = now.getDate();

    container.innerHTML = `
        <div class="dashboard-container">
            <div class="stats-row">
                <div class="stat-card">
                    <h4>Daily Progress</h4>
                    <div class="chart-wrapper">
                        <div class="y-axis"><span>100%</span><span>75%</span><span>50%</span><span>25%</span><span>0%</span></div>
                        <div class="chart-area"><div id="daily-chart" class="bar-chart"></div><div id="daily-x-axis" class="x-axis"></div></div>
                    </div>
                </div>
                <div class="stat-card">
                    <h4>Weekly Progress</h4>
                    <div class="chart-wrapper">
                        <div class="y-axis"><span>100%</span><span>75%</span><span>50%</span><span>25%</span><span>0%</span></div>
                        <div class="chart-area"><div id="weekly-chart" class="bar-chart"></div><div id="weekly-x-axis" class="x-axis"></div></div>
                    </div>
                </div>
                <div class="stat-card center-card"><h4>Overall</h4><h1 id="total-percent">0%</h1></div>
                <div class="stat-card center-card"><h4>Goal</h4><h1>372</h1></div>
            </div>
            <div class="main-grid">
                <div class="habit-sidebar" id="habit-names">
                    <div class="calendar-info"><div class="year-label">YEAR: ${year}</div><div class="month-label">${monthName.toUpperCase()}</div></div>
                    <div class="sidebar-header">My Habits</div>
                </div>
                <div class="checkbox-grid-wrapper">
                    <div class="grid-header-row week-row" id="week-labels"></div>
                    <div class="grid-header-row day-names-row" id="day-names"></div>
                    <div class="grid-header-row day-numbers-row" id="day-numbers"></div>
                    <div id="habit-checks-container"></div>
                </div>
                <div class="habit-analysis" id="habit-analysis">
                    <div class="analysis-header-top">Analysis</div>
                    <div class="analysis-header-sub">
                        <span>Goal</span><span>Actual</span><span>Left</span><span>Progress</span>
                    </div>
                    <div id="analysis-rows-container"></div>
                </div>
            </div>
            <button class="add-habit-btn" onclick="addHabit()">+ Add New Habit</button>
        </div>`;

    document.getElementById('post-title').innerText = `HABIT TRACKER - ${monthName} ${day}, ${year}`;
    refreshHabitDisplay();
};

const refreshHabitDisplay = () => {
    const names = document.getElementById('habit-names');
    const checks = document.getElementById('habit-checks-container');
    const analysis = document.getElementById('analysis-rows-container');
    if (!names || !checks || !analysis) return;

    const info = names.querySelector('.calendar-info').outerHTML;
    names.innerHTML = info + '<div class="sidebar-header">My Habits</div>';

    document.getElementById('week-labels').innerHTML = Array.from({ length: 5 }, (_, i) => `<div class="week-cell" style="grid-column: span ${i === 4 ? 3 : 7};">Week ${i + 1}</div>`).join('');

    const now = new Date();
    let dNamesHTML = ''; let dNumsHTML = '';
    for (let d = 1; d <= 31; d++) {
        const dObj = new Date(now.getFullYear(), now.getMonth(), d);
        dNamesHTML += `<div class="grid-cell label">${dObj.toLocaleDateString('en-US', { weekday: 'short' }).charAt(0)}</div>`;
        dNumsHTML += `<div class="grid-cell label num">${d}</div>`;
    }
    document.getElementById('day-names').innerHTML = dNamesHTML;
    document.getElementById('day-numbers').innerHTML = dNumsHTML;

    checks.innerHTML = '';
    analysis.innerHTML = '';

    habits.forEach((habit, hIdx) => {
        const nameDiv = document.createElement('div');
        nameDiv.className = 'habit-name-item';
        nameDiv.innerHTML = `<span contenteditable="true" onblur="updateHabitName(${hIdx}, this)">${habit.name}</span><button class="delete-habit-btn" onclick="deleteHabit(${hIdx})">×</button>`;
        names.appendChild(nameDiv);

        const row = document.createElement('div');
        row.className = 'grid-check-row';
        habit.checks.forEach((val, dIdx) => {
            const cell = document.createElement('div');
            cell.className = `grid-cell check ${val ? 'checked' : ''}`;
            cell.onclick = () => { habits[hIdx].checks[dIdx] = !habits[hIdx].checks[dIdx]; saveHabits(); refreshHabitDisplay(); };
            row.appendChild(cell);
        });
        checks.appendChild(row);

        const actual = habit.checks.filter(v => v).length;
        const left = 31 - actual;
        const percent = Math.round((actual / 31) * 100);

        const aRow = document.createElement('div');
        aRow.className = 'analysis-row';
        aRow.innerHTML = `
            <span>31</span><span>${actual}</span><span>${left}</span>
            <div class="analysis-progress-cell">
                <div class="a-bar-bg"><div class="a-bar-fill" style="width: ${percent}%"></div></div>
                <span class="a-percent-text">${percent}%</span>
            </div>
        `;
        analysis.appendChild(aRow);
    });
    updateStats();
};

window.updateHabitName = (idx, el) => { habits[idx].name = el.innerText; saveHabits(); };
window.deleteHabit = (idx) => { if (confirm('Delete this habit?')) { habits.splice(idx, 1); saveHabits(); refreshHabitDisplay(); } };
window.addHabit = () => { habits.push({ name: 'New Habit', checks: new Array(31).fill(false) }); saveHabits(); refreshHabitDisplay(); };
const saveHabits = () => localStorage.setItem('my-habits', JSON.stringify(habits));

const updateStats = () => {
    const dailyData = Array.from({ length: 31 }, (_, d) => {
        const done = habits.filter(h => h.checks[d]).length;
        return habits.length ? (done / habits.length) * 100 : 0;
    });

    document.getElementById('daily-chart').innerHTML = dailyData.map(v => `<div class="bar" style="height:${v}%"></div>`).join('');
    document.getElementById('daily-x-axis').innerHTML = Array.from({ length: 31 }, (_, i) => `<span>${i + 1}</span>`).join('');

    const weeklyData = [];
    for (let i = 0; i < 5; i++) {
        const week = dailyData.slice(i * 7, (i + 1) * 7);
        const avg = week.reduce((a, b) => a + b, 0) / (week.length || 1);
        weeklyData.push(avg);
    }
    document.getElementById('weekly-chart').innerHTML = weeklyData.map(v => `<div class="bar" style="height:${v}%; width:30px;"></div>`).join('');
    document.getElementById('weekly-x-axis').innerHTML = `<span>W1</span><span>W2</span><span>W3</span><span>W4</span><span>W5</span>`;

    const doneTotal = habits.reduce((acc, h) => acc + h.checks.filter(c => c).length, 0);
    document.getElementById('total-percent').innerText = `${Math.round((doneTotal / (habits.length * 31 || 1)) * 100)}%`;
};

const animate = () => { requestAnimationFrame(animate); planets.forEach(p => p.rotation.y += 0.005); controls.update(); renderer.render(scene, camera); };
animate();