// File: assets/sidebar-sub.js
// KHUSUS UNTUK HALAMAN DI DALAM SUBFOLDER

function buildSidebar() {
    const sidebarHTML = `
        <aside class="w-64 bg-white shadow-md hidden md:block flex-shrink-0 h-full flex flex-col">
            <div class="p-6">
                <h2 class="text-2xl font-bold text-gray-800">App Sekolah</h2>
                <p class="text-sm text-gray-500">Versi Lengkap</p>
            </div>
            <nav id="main-nav" class="mt-2 flex-grow overflow-y-auto">
                <a href="../dashboard.html" class="sidebar-link flex items-center px-6 py-3 text-gray-700 hover:bg-gray-200" data-page="dashboard"><ion-icon name="grid-outline" class="w-5 h-5"></ion-icon><span class="mx-4">Dashboard</span></a>
                
                <div class="sidebar-group">
                    <button class="sidebar-group-toggle flex items-center justify-between w-full px-6 py-3 text-gray-700 hover:bg-gray-200">
                        <span class="flex items-center"><ion-icon name="server-outline" class="w-5 h-5"></ion-icon><span class="mx-4">Master Data</span></span>
                        <ion-icon name="chevron-down-outline" class="w-4 h-4 transform transition-transform"></ion-icon>
                    </button>
                    <div class="sidebar-submenu hidden pl-10">
                        <a href="../master_data/tahun_ajaran.html" class="sidebar-link flex items-center py-2 text-gray-600 hover:text-gray-900" data-page="tahun_ajaran">Tahun Ajaran</a>
                        <a href="../master_data/ruangan.html" class="sidebar-link flex items-center py-2 text-gray-600 hover:text-gray-900" data-page="ruangan">Data Ruangan</a>
                        <a href="../master_data/guru.html" class="sidebar-link flex items-center py-2 text-gray-600 hover:text-gray-900" data-page="guru">Data Guru</a>
                        <a href="../master_data/siswa.html" class="sidebar-link flex items-center py-2 text-gray-600 hover:text-gray-900" data-page="siswa">Data Siswa</a>
                    </div>
                </div>

                <div class="sidebar-group">
                    <button class="sidebar-group-toggle flex items-center justify-between w-full px-6 py-3 text-gray-700 hover:bg-gray-200">
                        <span class="flex items-center"><ion-icon name="school-outline" class="w-5 h-5"></ion-icon><span class="mx-4">Kesiswaan</span></span>
                        <ion-icon name="chevron-down-outline" class="w-4 h-4 transform transition-transform"></ion-icon>
                    </button>
                    <div class="sidebar-submenu hidden pl-10">
                        <a href="../kesiswaan/ppdb.html" class="sidebar-link flex items-center py-2 text-gray-600 hover:text-gray-900" data-page="ppdb">PPDB</a>
                        <a href="../kesiswaan/absensi_siswa.html" class="sidebar-link flex items-center py-2 text-gray-600 hover:text-gray-900" data-page="absensi_siswa">Absensi Siswa</a>
                        <a href="../kesiswaan/pelanggaran.html" class="sidebar-link flex items-center py-2 text-gray-600 hover:text-gray-900" data-page="pelanggaran">Pelanggaran Siswa</a>
                    </div>
                </div>
                
                <div class="sidebar-group">
                    <button class="sidebar-group-toggle flex items-center justify-between w-full px-6 py-3 text-gray-700 hover:bg-gray-200">
                        <span class="flex items-center"><ion-icon name="book-outline" class="w-5 h-5"></ion-icon><span class="mx-4">Kurikulum</span></span>
                        <ion-icon name="chevron-down-outline" class="w-4 h-4 transform transition-transform"></ion-icon>
                    </button>
                    <div class="sidebar-submenu hidden pl-10">
                         <a href="../kurikulum/jadwal.html" class="sidebar-link flex items-center py-2 text-gray-600 hover:text-gray-900" data-page="jadwal">Jadwal Pelajaran</a>
                         <a href="../kurikulum/akademik.html" class="sidebar-link flex items-center py-2 text-gray-600 hover:text-gray-900" data-page="akademik">Data Akademik</a>
                    </div>
                </div>

                 <div class="sidebar-group">
                    <button class="sidebar-group-toggle flex items-center justify-between w-full px-6 py-3 text-gray-700 hover:bg-gray-200">
                        <span class="flex items-center"><ion-icon name="wallet-outline" class="w-5 h-5"></ion-icon><span class="mx-4">Keuangan</span></span>
                        <ion-icon name="chevron-down-outline" class="w-4 h-4 transform transition-transform"></ion-icon>
                    </button>
                    <div class="sidebar-submenu hidden pl-10">
                         <a href="../keuangan/pembayaran_siswa.html" class="sidebar-link flex items-center py-2 text-gray-600 hover:text-gray-900" data-page="pembayaran_siswa">Pembayaran Siswa</a>
                    </div>
                </div>

                 <div class="sidebar-group">
                    <button class="sidebar-group-toggle flex items-center justify-between w-full px-6 py-3 text-gray-700 hover:bg-gray-200">
                        <span class="flex items-center"><ion-icon name="id-card-outline" class="w-5 h-5"></ion-icon><span class="mx-4">Humas</span></span>
                        <ion-icon name="chevron-down-outline" class="w-4 h-4 transform transition-transform"></ion-icon>
                    </button>
                    <div class="sidebar-submenu hidden pl-10">
                         <a href="../humas/buku_tamu.html" class="sidebar-link flex items-center py-2 text-gray-600 hover:text-gray-900" data-page="buku_tamu">Buku Tamu</a>
                    </div>
                </div>
            </nav>
        </aside>
    `;
    
    document.getElementById('sidebar-placeholder').innerHTML = sidebarHTML;

    document.querySelectorAll('.sidebar-group-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const submenu = button.nextElementSibling;
            const icon = button.querySelector('ion-icon[name="chevron-down-outline"]');
            submenu.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
        });
    });

    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    const activeLink = document.querySelector(`.sidebar-link[data-page="${currentPage || 'dashboard'}"]`);
    
    if (activeLink) {
        activeLink.classList.add('active', 'bg-blue-500', 'text-white', 'font-semibold');
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
