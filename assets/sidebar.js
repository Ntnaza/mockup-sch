// File: assets/sidebar.js
// Sidebar dengan style lebih modern

function buildSidebar() {
    const sidebarHTML = `
        <aside class="w-64 bg-gradient-to-b from-white to-gray-50 shadow-lg hidden md:flex flex-col h-full border-r border-gray-200">
            <!-- Logo / Brand -->
            <div class="p-6 border-b border-gray-200">
                <h2 class="text-2xl font-bold text-blue-600 tracking-tight">App Sekolah</h2>
                <p class="text-sm text-gray-500">Versi Lengkap</p>
            </div>
            
            <!-- Navigation -->
            <nav id="main-nav" class="mt-2 flex-grow overflow-y-auto custom-scrollbar">
                <a href="dashboard.html" class="sidebar-link flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200" data-page="dashboard">
                    <ion-icon name="grid-outline" class="w-5 h-5"></ion-icon>
                    <span>Dashboard</span>
                </a>
                
                <!-- Master Data -->
                <div class="sidebar-group">
                    <button class="sidebar-group-toggle flex items-center justify-between w-full px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200">
                        <span class="flex items-center gap-3">
                            <ion-icon name="server-outline" class="w-5 h-5"></ion-icon>
                            <span>Master Data</span>
                        </span>
                        <ion-icon name="chevron-down-outline" class="w-4 h-4 transform transition-transform"></ion-icon>
                    </button>
                    <div class="sidebar-submenu hidden pl-10 flex flex-col gap-1 mt-1">
                        <a href="master_data/tahun_ajaran.html" class="sidebar-link py-2 px-3 rounded-md text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition">Tahun Ajaran</a>
                        <a href="master_data/ruangan.html" class="sidebar-link py-2 px-3 rounded-md text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition">Data Ruangan</a>
                        <a href="master_data/guru.html" class="sidebar-link py-2 px-3 rounded-md text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition">Data Guru</a>
                        <a href="master_data/siswa.html" class="sidebar-link py-2 px-3 rounded-md text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition">Data Siswa</a>
                    </div>
                </div>

                <!-- Kesiswaan -->
                <div class="sidebar-group">
                    <button class="sidebar-group-toggle flex items-center justify-between w-full px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200">
                        <span class="flex items-center gap-3">
                            <ion-icon name="school-outline" class="w-5 h-5"></ion-icon>
                            <span>Kesiswaan</span>
                        </span>
                        <ion-icon name="chevron-down-outline" class="w-4 h-4 transform transition-transform"></ion-icon>
                    </button>
                    <div class="sidebar-submenu hidden pl-10 flex flex-col gap-1 mt-1">
                        <a href="kesiswaan/ppdb.html" class="sidebar-link py-2 px-3 rounded-md text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition">PPDB</a>
                        <a href="kesiswaan/absensi_siswa.html" class="sidebar-link py-2 px-3 rounded-md text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition">Absensi Siswa</a>
                        <a href="kesiswaan/pelanggaran.html" class="sidebar-link py-2 px-3 rounded-md text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition">Pelanggaran Siswa</a>
                    </div>
                </div>
                
                <!-- Kurikulum -->
                <div class="sidebar-group">
                    <button class="sidebar-group-toggle flex items-center justify-between w-full px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200">
                        <span class="flex items-center gap-3">
                            <ion-icon name="book-outline" class="w-5 h-5"></ion-icon>
                            <span>Kurikulum</span>
                        </span>
                        <ion-icon name="chevron-down-outline" class="w-4 h-4 transform transition-transform"></ion-icon>
                    </button>
                    <div class="sidebar-submenu hidden pl-10 flex flex-col gap-1 mt-1">
                        <a href="kurikulum/jadwal.html" class="sidebar-link py-2 px-3 rounded-md text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition">Jadwal Pelajaran</a>
                        <a href="kurikulum/akademik.html" class="sidebar-link py-2 px-3 rounded-md text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition">Data Akademik</a>
                    </div>
                </div>

                <!-- Keuangan -->
                <div class="sidebar-group">
                    <button class="sidebar-group-toggle flex items-center justify-between w-full px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200">
                        <span class="flex items-center gap-3">
                            <ion-icon name="wallet-outline" class="w-5 h-5"></ion-icon>
                            <span>Keuangan</span>
                        </span>
                        <ion-icon name="chevron-down-outline" class="w-4 h-4 transform transition-transform"></ion-icon>
                    </button>
                    <div class="sidebar-submenu hidden pl-10 flex flex-col gap-1 mt-1">
                        <a href="keuangan/pembayaran_siswa.html" class="sidebar-link py-2 px-3 rounded-md text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition">Pembayaran Siswa</a>
                    </div>
                </div>

                <!-- Humas -->
                <div class="sidebar-group">
                    <button class="sidebar-group-toggle flex items-center justify-between w-full px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200">
                        <span class="flex items-center gap-3">
                            <ion-icon name="id-card-outline" class="w-5 h-5"></ion-icon>
                            <span>Humas</span>
                        </span>
                        <ion-icon name="chevron-down-outline" class="w-4 h-4 transform transition-transform"></ion-icon>
                    </button>
                    <div class="sidebar-submenu hidden pl-10 flex flex-col gap-1 mt-1">
                        <a href="humas/buku_tamu.html" class="sidebar-link py-2 px-3 rounded-md text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition">Buku Tamu</a>
                    </div>
                </div>
            </nav>
        </aside>
    `;
    
    document.getElementById('sidebar-placeholder').innerHTML = sidebarHTML;

    // Toggle Submenu
    document.querySelectorAll('.sidebar-group-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const submenu = button.nextElementSibling;
            const icon = button.querySelector('ion-icon[name="chevron-down-outline"]');
            submenu.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
        });
    });

    // Active Link Highlight
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    const activeLink = document.querySelector(`.sidebar-link[data-page="${currentPage || 'dashboard'}"]`);
    
    if (activeLink) {
        activeLink.classList.add('bg-blue-500', 'text-white', 'font-semibold', 'shadow-sm');
        const parentSubmenu = activeLink.closest('.sidebar-submenu');
        if (parentSubmenu) {
            parentSubmenu.classList.remove('hidden');
            const toggleButton = parentSubmenu.previousElementSibling;
            const icon = toggleButton.querySelector('ion-icon[name="chevron-down-outline"]');
            icon.classList.add('rotate-180');
        }
    }
}

document.addEventListener('DOMContentLoaded', buildSidebar);
