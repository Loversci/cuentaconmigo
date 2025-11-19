// ===================================
// CUENTA CONMIGO - JavaScript Principal
// Versión corregida y optimizada - Noviembre 2025
// ===================================

// ===================================
// INICIALIZACIÓN DE PARTÍCULAS
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    if (window.tsParticles) {
        tsParticles.load("particles-js", {
            fpsLimit: 60,
            particles: {
                number: { value: 50, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.3, random: true },
                size: { value: 3, random: true },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    attract: { enable: false, rotateX: 600, rotateY: 1200 }
                },
                links: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.2,
                    width: 1
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "grab" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    grab: { distance: 140, line_linked: { opacity: 1 } },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    }
});

// ===================================
// GRÁFICOS CON CHART.JS
// ===================================

Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.color = '#6b7280';

// Gráfico 1: Proyección de Demanda Insatisfecha
const demandChartCtx = document.getElementById('demandChart');
if (demandChartCtx) {
    new Chart(demandChartCtx, {
        type: 'line',
        data: {
            labels: ['2025', '2026', '2027', '2028', '2029'],
            datasets: [
                { label: 'Demanda Total PYMEs', data: [18000, 19440, 21384, 22914, 24300], borderColor: '#2563eb', backgroundColor: 'rgba(37, 99, 235, 0.1)', borderWidth: 3, tension: 0.4, fill: true },
                { label: 'Demanda Insatisfecha (70%)', data: [12600, 13608, 14969, 16040, 17010], borderColor: '#10b981', backgroundColor: 'rgba(16, 185, 129, 0.1)', borderWidth: 3, tension: 0.4, fill: true },
                { label: 'Cuenta Conmigo (Clientes)', data: [315, 630, 1050, 1575, 1890], borderColor: '#f59e0b', backgroundColor: 'rgba(245, 158, 11, 0.1)', borderWidth: 3, tension: 0.4, fill: true }
            ]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top' }, tooltip: { mode: 'index', intersect: false } }, scales: { y: { beginAtZero: true, ticks: { callback: v => v.toLocaleString() } } } }
    });
}

// Gráfico 2: Plan de Producción Anual
const productionChartCtx = document.getElementById('productionChart');
if (productionChartCtx) {
    new Chart(productionChartCtx, {
        type: 'bar',
        data: {
            labels: ['2025', '2026', '2027', '2028', '2029'],
            datasets: [
                {
                    label: 'Total Servicios Anuales',
                    data: [37406, 78074, 130123, 195185, 234221],
                    backgroundColor: [
                        'rgba(37, 99, 235, 0.8)',
                        'rgba(59, 130, 246, 0.8)',
                        'rgba(16, 185, 129, 0.8)',
                        'rgba(20, 184, 166, 0.8)',
                        'rgba(245, 158, 11, 0.8)'
                    ],
                    borderColor: [
                        '#2563eb',
                        '#3b82f6',
                        '#10b981',
                        '#14b8a6',
                        '#f59e0b'
                    ],
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.parsed.y.toLocaleString() + ' servicios';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value.toLocaleString();
                        }
                    }
                }
            }
        }
    });
}

// Gráfico 3: Inversión por Año
const inversionChartCtx = document.getElementById('inversionChart');
if (inversionChartCtx) {
    new Chart(inversionChartCtx, {
        type: 'doughnut',
        data: {
            labels: ['Año 0 (2024)', 'Año 1 (2025)', 'Año 2-5 (2026-2029)'],
            datasets: [{
                data: [65000, 25000, 100000],
                backgroundColor: [
                    'rgba(37, 99, 235, 0.8)',
                    'rgba(16, 185, 129, 0.8)',
                    'rgba(245, 158, 11, 0.8)'
                ],
                borderColor: [
                    '#2563eb',
                    '#10b981',
                    '#f59e0b'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${label}: $${value.toLocaleString()} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

// Gráfico 4: Estructura de Financiamiento
const financiamientoChartCtx = document.getElementById('financiamientoChart');
if (financiamientoChartCtx) {
    new Chart(financiamientoChartCtx, {
        type: 'pie',
        data: {
            labels: [
                'Aporte de Socios (33%)',
                'Préstamo BANPRO (43%)',
                'Reinversión Utilidades (24%)'
            ],
            datasets: [{
                data: [62700, 81700, 45600],
                backgroundColor: [
                    'rgba(37, 99, 235, 0.8)',
                    'rgba(16, 185, 129, 0.8)',
                    'rgba(245, 158, 11, 0.8)'
                ],
                borderColor: [
                    '#2563eb',
                    '#10b981',
                    '#f59e0b'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const value = context.parsed || 0;
                            return `$${value.toLocaleString()}`;
                        }
                    }
                }
            }
        }
    });
}

// Gráfico 5: Flujos de Caja Proyectados
const flujoChartCtx = document.getElementById('flujoChart');
if (flujoChartCtx) {
    new Chart(flujoChartCtx, {
        type: 'bar',
        data: {
            labels: ['Año 0', 'Año 1 (2025)', 'Año 2 (2026)', 'Año 3 (2027)', 'Año 4 (2028)', 'Año 5 (2029)'],
            datasets: [
                {
                    label: 'Ingresos',
                    data: [0, 565080, 1199880, 1999800, 2999700, 3599640],
                    backgroundColor: 'rgba(16, 185, 129, 0.8)',
                    borderColor: '#10b981',
                    borderWidth: 2
                },
                {
                    label: 'Costos + Gastos',
                    data: [0, -521269, -852482, -1253870, -1693832, -1975803],
                    backgroundColor: 'rgba(239, 68, 68, 0.8)',
                    borderColor: '#ef4444',
                    borderWidth: 2
                },
                {
                    label: 'Flujo Neto',
                    data: [-187500, -17927, 154584, 488356, 890313, 1107891],
                    backgroundColor: 'rgba(37, 99, 235, 0.8)',
                    borderColor: '#2563eb',
                    borderWidth: 2,
                    type: 'line',
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            let value = context.parsed.y || 0;
                            return `${label}: $${value.toLocaleString()}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                }
            }
        }
    });
}

// Gráfico 6: Estado de Resultados Año 5
const resultadosChartCtx = document.getElementById('resultadosChart');
if (resultadosChartCtx) {
    new Chart(resultadosChartCtx, {
        type: 'doughnut',
        data: {
            labels: [
                'Ingresos por Servicios',
                'Costos Operativos',
                'Gastos Administrativos',
                'Gastos de Ventas',
                'Utilidad Neta'
            ],
            datasets: [{
                data: [3599640, 1295870, 503949, 161984, 1136686],
                backgroundColor: [
                    'rgba(16, 185, 129, 0.8)',
                    'rgba(239, 68, 68, 0.8)',
                    'rgba(245, 158, 11, 0.8)',
                    'rgba(139, 92, 246, 0.8)',
                    'rgba(37, 99, 235, 0.8)'
                ],
                borderColor: [
                    '#10b981',
                    '#ef4444',
                    '#f59e0b',
                    '#8b5cf6',
                    '#2563eb'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 10
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            return `${label}: $${value.toLocaleString()}`;
                        }
                    }
                }
            }
        }
    });
}
