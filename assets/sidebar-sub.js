// File: assets/sidebar-sub.js
// KHUSUS UNTUK HALAMAN DI DALAM SUBFOLDER

function buildSidebar() {
    const sidebarHTML = `
        <aside class="w-64 bg-white shadow-lg hidden md:block flex-shrink-0 h-full flex flex-col border-r border-gray-200">
            <div class="p-6 border-b border-gray-200">
                <h2 class="text-2xl font-bold text-blue-600">App Sekolah</h2>
                <p class="text-sm text-gray-500">Versi Lengkap</p>
            </div>
            <nav id="main-nav" class="mt-2 flex-grow overflow-y-auto">
                <a href="../dashboard.html" class="sidebar-link flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 rounded-r-full" data-page="dashboard">
                    <ion-icon name="grid-outline" class="w-5 h-5"></ion-icon><span class="mx-4">Dashboard</span>
                </a>
                
                <div class="sidebar-group">
                    <button class="sidebar-group-toggle flex items-center justify-between w-full px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200">
                        <span class="flex items-center"><ion-icon name="server-outline" class="w-5 h-5"></ion-icon><span class="mx-4">Master Data</span></span>
                        <ion-icon name="chevron-down-outline" class="w-4 h-4 transform transition-transform duration-300"></ion-icon>
                    </button>
                    <div class="sidebar-submenu max-h-0 overflow-hidden transition-all duration-300 ease-in-out pl-10">
                        <a href="../master_data/tahun_ajaran.html" class="sidebar-link flex items-center py-2 text-gray-600 hover:text-blue-600 transition-all" data-page="tahun_ajaran">Tahun Ajaran</a>
                        <a href="../master_data/ruangan.html" class="sidebar-link flex items-center py-2 text-gray-600 hover:text-blue-600 transition-all" data-page="ruangan">Data Ruangan</a>
                        <a href="../master_data/guru.html" class="sidebar-link flex items-center py-2 text-gray-600 hover:text-blue-600 transition-all" data-page="guru">Data Guru</a>
                        <a href="../master_data/siswa.html" class="sidebar-link flex items-center py-2 text-gray-600 hover:text-blue-600 transition-all" data-page="siswa">Data Siswa</a>
                    </div>
                </div>

                <div class="sidebar-group">
                    <button class="sidebar-group-toggle flex items-center justify-between w-full px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200">
                        <span class="flex items-center"><ion-icon name="school-outline" class="w-5 h-5"></ion-icon><span class="mx-4">Kesiswaan</span></span>
                        <ion-icon name="chevron-down-outline" class="w-4 h-4 transform transition-transform duration-300"></ion-icon>
                    </button>
                    <div class="sidebar-submenu max-h-0 overflow-hidden transition-all duration-300 ease-in-out pl-10">
                        <a href="../kesiswaan/ppdb.html" class="sidebar-link flex items-center py-2 text-gray-600 hover:text-blue-600 transition-all" data-page="ppdb">PPDB</a>
                        <a href="../kesiswaan/absensi_siswa.html" class="sidebar-link flex items-center py-2 text-gray-600 hover:text-blue-600 transition-all" data-page="absensi_siswa">Absensi Siswa</a>
                        <a href="../kesiswaan/pelanggaran.html" class="sidebar-link flex items-center py-2 text-gray-600 hover:text-blue-600 transition-all" data-page="pelanggaran">Pelanggaran Siswa</a>
                    </div>
                </div>
                
                <div class="sidebar-group">
                    <button class="sidebar-group-toggle flex items-center justify-between w-full px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200">
                        <span class="flex items-center"><ion-icon name="book-outline" class="w-5 h-5"></ion-icon><span class="mx-4">Kurikulum</span></span>
                        <ion-icon name="chevron-down-outline" class="w-4 h-4 transform transition-transform duration-300"></ion-icon>
                    </button>
                    <div class="sidebar-submenu max-h-0 overflow-hidden transition-all duration-300 ease-in-out pl-10">
                        <a href="../kurikulum/jadwal.html" class="sidebar-link flex items-center py-2 text-gray-600 hover:text-blue-600 transition-all" data-page="jadwal">Jadwal Pelajaran</a>
                        <a href="../kurikulum/akademik.html" class="sidebar-link flex items-center py-2 text-gray-600 hover:text-blue-600 transition-all" data-page="akademik">Data Akademik</a>
                    </div>
                </div>

                <div class="sidebar-group">
                    <button class="sidebar-group-toggle flex items-center justify-between w-full px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200">
                        <span class="flex items-center"><ion-icon name="wallet-outline" class="w-5 h-5"></ion-icon><span class="mx-4">Keuangan</span></span>
                        <ion-icon name="chevron-down-outline" class="w-4 h-4 transform transition-transform duration-300"></ion-icon>
                    </button>
                    <div class="sidebar-submenu max-h-0 overflow-hidden transition-all duration-300 ease-in-out pl-10">
                        <a href="../keuangan/pembayaran_siswa.html" class="sidebar-link flex items-center py-2 text-gray-600 hover:text-blue-600 transition-all" data-page="pembayaran_siswa">Pembayaran Siswa</a>
                    </div>
                </div>

                <div class="sidebar-group">
                    <button class="sidebar-group-toggle flex items-center justify-between w-full px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200">
                        <span class="flex items-center"><ion-icon name="id-card-outline" class="w-5 h-5"></ion-icon><span class="mx-4">Humas</span></span>
                        <ion-icon name="chevron-down-outline" class="w-4 h-4 transform transition-transform duration-300"></ion-icon>
                    </button>
                    <div class="sidebar-submenu max-h-0 overflow-hidden transition-all duration-300 ease-in-out pl-10">
                        <a href="../humas/buku_tamu.html" class="sidebar-link flex items-center py-2 text-gray-600 hover:text-blue-600 transition-all" data-page="buku_tamu">Buku Tamu</a>
                    </div>
                </div>
            </nav>
        </aside>
    `;
    
    document.getElementById('sidebar-placeholder').innerHTML = sidebarHTML;

    // Toggle Submenu dengan animasi
    document.querySelectorAll('.sidebar-group-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const submenu = button.nextElementSibling;
            const icon = button.querySelector('ion-icon[name="chevron-down-outline"]');

            if (submenu.classList.contains('max-h-0')) {
                submenu.classList.remove('max-h-0');
                submenu.classList.add('max-h-96'); // buka smooth
                icon.classList.add('rotate-180');
            } else {
                submenu.classList.remove('max-h-96');
                submenu.classList.add('max-h-0'); // tutup smooth
                icon.classList.remove('rotate-180');
            }
        });
    });

    // Highlight halaman aktif
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    const activeLink = document.querySelector(`.sidebar-link[data-page="${currentPage || 'dashboard'}"]`);
    
    if (activeLink) {
        activeLink.classList.add(
            'active',
            'text-blue-600',
            'font-semibold',
            'bg-blue-50',
            'border-l-4',
            'border-blue-500',
            'rounded-r-full'
        );
        activeLink.classList.remove('bg-blue-500', 'text-white');

        const parentSubmenu = activeLink.closest('.sidebar-submenu');
        if (parentSubmenu) {
            parentSubmenu.classList.remove('max-h-0');
            parentSubmenu.classList.add('max-h-96');
            const toggleButton = parentSubmenu.previousElementSibling;
            const icon = toggleButton.querySelector('ion-icon[name="chevron-down-outline"]');
            icon.classList.add('rotate-180');
        }
    }
}

document.addEventListener('DOMContentLoaded', buildSidebar);
