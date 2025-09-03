// File: assets/sidebar-sub.js
// Sidebar yang path-nya disesuaikan untuk halaman di dalam sub-folder.

function buildSidebar() {
    // Path disesuaikan dengan menambahkan "../"
    const sidebarHTML = `
        <aside class="w-64 bg-white shadow-lg hidden md:flex flex-col h-full border-r border-gray-200 flex-shrink-0">
            <!-- Logo / Brand -->
            <div class="p-6 border-b border-gray-200">
                <h2 class="text-2xl font-bold text-blue-600 tracking-tight">App Sekolah</h2>
                <p class="text-sm text-gray-500">Versi Lengkap</p>
            </div>
            
            <!-- Navigation -->
            <nav id="main-nav" class="p-4 flex-grow overflow-y-auto" style="scrollbar-width: thin;">
                <a href="../dashboard.html" class="sidebar-link flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200" data-page="dashboard">
                    <ion-icon name="grid-outline" class="w-5 h-5"></ion-icon>
                    <span>Dashboard</span>
                </a>
                
                <!-- Grup Menu (href disesuaikan) -->
                
                <!-- Profil Sekolah -->
                <div class="sidebar-group mt-2">
                    <button class="sidebar-group-toggle">
                        <span class="flex items-center gap-3"><ion-icon name="business-outline" class="w-5 h-5"></ion-icon><span>Profil Sekolah</span></span>
                        <ion-icon name="chevron-down-outline" class="w-4 h-4 transform transition-transform"></ion-icon>
                    </button>
                    <div class="sidebar-submenu">
                        <a href="../profil_sekolah/profil.html" class="sidebar-link">Profil</a>
                        <!-- Tambahkan link lain jika ada -->
                    </div>
                </div>

                <!-- Keuangan -->
                <div class="sidebar-group">
                    <button class="sidebar-group-toggle">
                         <span class="flex items-center gap-3"><ion-icon name="wallet-outline" class="w-5 h-5"></ion-icon><span>Keuangan</span></span>
                         <ion-icon name="chevron-down-outline" class="w-4 h-4 transform transition-transform"></ion-icon>
                    </button>
                    <div class="sidebar-submenu">
                         <a href="../keuangan/pembayaran_siswa.html" class="sidebar-link" data-page="pembayaran_siswa">Pembayaran Siswa</a>
                    </div>
                </div>

                <!-- Kurikulum -->
                <div class="sidebar-group">
                    <button class="sidebar-group-toggle">
                        <span class="flex items-center gap-3"><ion-icon name="book-outline" class="w-5 h-5"></ion-icon><span>Kurikulum</span></span>
                        <ion-icon name="chevron-down-outline" class="w-4 h-4 transform transition-transform"></ion-icon>
                    </button>
                    <div class="sidebar-submenu">
                        <a href="../kurikulum/jadwal.html" class="sidebar-link" data-page="jadwal">Jadwal Pelajaran</a>
                        <a href="../kurikulum/akademik.html" class="sidebar-link" data-page="akademik">Pengolahan Nilai</a>
                    </div>
                </div>

                <!-- Kesiswaan -->
                <div class="sidebar-group">
                    <button class="sidebar-group-toggle">
                        <span class="flex items-center gap-3"><ion-icon name="school-outline" class="w-5 h-5"></ion-icon><span>Kesiswaan</span></span>
                        <ion-icon name="chevron-down-outline" class="w-4 h-4 transform transition-transform"></ion-icon>
                    </button>
                    <div class="sidebar-submenu">
                        <a href="../kesiswaan/ppdb.html" class="sidebar-link" data-page="ppdb">PPDB</a>
                        <a href="../kesiswaan/data_siswa.html" class="sidebar-link" data-page="data_siswa">Data Siswa</a>
                        <a href="../kesiswaan/absensi_siswa.html" class="sidebar-link" data-page="absensi_siswa">Absensi Siswa</a>
                        <a href="../kesiswaan/pelanggaran.html" class="sidebar-link" data-page="pelanggaran">Pelanggaran Siswa</a>
                    </div>
                </div>

                <!-- Humas -->
                 <div class="sidebar-group">
                    <button class="sidebar-group-toggle">
                        <span class="flex items-center gap-3"><ion-icon name="megaphone-outline" class="w-5 h-5"></ion-icon><span>Humas</span></span>
                        <ion-icon name="chevron-down-outline" class="w-4 h-4 transform transition-transform"></ion-icon>
                    </button>
                    <div class="sidebar-submenu">
                         <a href="../humas/buku_tamu.html" class="sidebar-link" data-page="buku_tamu">Buku Tamu</a>
                    </div>
                </div>
            </nav>
        </aside>
    `;
    
    document.getElementById('sidebar-placeholder').innerHTML = sidebarHTML;

    const style = document.createElement('style');
    style.textContent = `
        .sidebar-group-toggle { display: flex; align-items: center; justify-content: space-between; width: 100%; padding: 0.625rem 1rem; font-size: 0.875rem; color: #374151; border-radius: 0.5rem; transition: all 0.2s ease; }
        .sidebar-group-toggle:hover { background-color: #F3F4F6; color: #1D4ED8; }
        .sidebar-submenu { display: none; padding-left: 2.25rem; margin-top: 0.25rem; border-left: 1px solid #E5E7EB; margin-left: 1.25rem; }
        .sidebar-submenu .sidebar-link { display: block; padding: 0.5rem 0.75rem; font-size: 0.875rem; color: #4B5563; border-radius: 0.375rem; }
        .sidebar-submenu .sidebar-link:hover { background-color: #DBEAFE; color: #1E40AF; }
        .sidebar-link.active-sub { background-color: #3B82F6; color: white; font-weight: 500; }
        .rotate-180 { transform: rotate(180deg); }
    `;
    document.head.appendChild(style);

    document.querySelectorAll('.sidebar-group-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const submenu = button.nextElementSibling;
            const icon = button.querySelector('ion-icon[name="chevron-down-outline"]');
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            icon.classList.toggle('rotate-180');
        });
    });

    const path = window.location.pathname;
    const segments = path.split("/");
    const page = segments.pop(); 
    
    // Penyesuaian kecil untuk menangani jika path-nya /folder/ atau /folder/index.html
    const currentPage = page === '' ? 'index.html' : page;
    
    const activeLink = document.querySelector(`.sidebar-link[href$="${currentPage}"]`);
    
    if (activeLink) {
        if (activeLink.closest('.sidebar-submenu')) {
            activeLink.classList.add('active-sub');
            const submenu = activeLink.closest('.sidebar-submenu');
            const toggle = submenu.previousElementSibling;
            submenu.style.display = 'block';
            toggle.querySelector('ion-icon[name="chevron-down-outline"]').classList.add('rotate-180');
        } else {
            activeLink.classList.add('active');
        }
    } else if (path.includes('dashboard')) {
        document.querySelector('.sidebar-link[href="../dashboard.html"]').classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', buildSidebar);
