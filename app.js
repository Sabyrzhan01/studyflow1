'use strict';
const STORAGE_KEY = 'studyflow.tasks.v1';
const $ = (id) => document.getElementById(id);
let tasks = loadTasks();
let currentFilter = 'all';
function loadTasks() { try { const raw = localStorage.getItem(STORAGE_KEY); const parsed = raw ? JSON.parse(raw) : []; return Array.isArray(parsed) ? parsed.filter(t => t && typeof t.id === 'string' && typeof t.title === 'string') : []; } catch { return []; } }
function saveTasks() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks)); } catch { alert('Could not save tasks. Check your browser storage settings.'); } }
function escapeHtml(value) { return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function render() {
  const completed = tasks.filter(t => t.completed).length;
  $('total').textContent = tasks.length; $('pending').textContent = tasks.length - completed; $('done').textContent = completed;
  const percent = tasks.length ? Math.round(completed / tasks.length * 100) : 0;
  $('progressNum').textContent = percent + '%'; $('progressBar').style.width = percent + '%';
  const shown = tasks.filter(t => currentFilter === 'all' || (currentFilter === 'done' ? t.completed : !t.completed)).sort((a,b) => a.dueDate.localeCompare(b.dueDate));
  $('taskList').innerHTML = shown.map(t => `<article class="task ${t.completed ? 'done' : ''}"><input type="checkbox" data-action="toggle" data-id="${escapeHtml(t.id)}" aria-label="Mark ${escapeHtml(t.title)} completed" ${t.completed ? 'checked' : ''}><div class="task-main"><div class="task-name">${escapeHtml(t.title)}</div><div class="meta"><span>Due ${escapeHtml(t.dueDate)}</span><span class="priority ${escapeHtml(t.priority)}">${escapeHtml(t.priority)} priority</span></div></div><button class="delete" data-action="delete" data-id="${escapeHtml(t.id)}" aria-label="Delete ${escapeHtml(t.title)}">Delete</button></article>`).join('');
  $('empty').hidden = shown.length > 0;
}
$('taskForm').addEventListener('submit', event => { event.preventDefault(); const title = $('taskTitle').value.trim(); const dueDate = $('taskDate').value; if (!title || !dueDate) return; tasks.push({id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(16).slice(2), title, dueDate, priority: $('taskPriority').value, completed: false}); saveTasks(); render(); event.target.reset(); $('taskTitle').focus(); });
$('taskList').addEventListener('change', event => { const el = event.target; if (el.dataset.action !== 'toggle') return; const task = tasks.find(t => t.id === el.dataset.id); if (task) { task.completed = el.checked; saveTasks(); render(); } });
$('taskList').addEventListener('click', event => { const el = event.target.closest('[data-action="delete"]'); if (!el) return; tasks = tasks.filter(t => t.id !== el.dataset.id); saveTasks(); render(); });
document.querySelector('.filters').addEventListener('click', event => { const button = event.target.closest('[data-filter]'); if (!button) return; currentFilter = button.dataset.filter; document.querySelectorAll('.filter').forEach(b => b.classList.toggle('active', b === button)); render(); });
$('today').textContent = new Intl.DateTimeFormat(undefined, {weekday:'short',month:'short',day:'numeric'}).format(new Date());
$('taskDate').value = new Date().toISOString().slice(0,10); render();
