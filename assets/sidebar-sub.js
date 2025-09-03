// File: assets/sidebar-sub.js
// Sidebar dengan style lebih modern untuk HALAMAN SUBFOLDER

function buildSidebar() {
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
                
                <!-- Profil Sekolah (Link Langsung) -->
                <a href="../profil_sekolah/profil.html" class="sidebar-link flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 mt-2" data-page="profil">
                    <ion-icon name="business-outline" class="w-5 h-5"></ion-icon>
                    <span>Profil Sekolah</span>
                </a>

                <!-- Kepegawaian -->
                <div class="sidebar-group mt-2">
                    <button class="sidebar-group-toggle">
                        <span class="flex items-center gap-3"><ion-icon name="people-circle-outline" class="w-5 h-5"></ion-icon><span>Kepegawaian</span></span>
                        <ion-icon name="chevron-down-outline" class="w-4 h-4 transform transition-transform"></ion-icon>
                    </button>
                    <div class="sidebar-submenu">
                        <a href="../master_data/guru.html" class="sidebar-link" data-page="data_pegawai">Data Pegawai</a>
                        <a href="#" class="sidebar-link">Tugas Pegawai</a>
                        <a href="#" class="sidebar-link">Pelaksanaan Tugas Harian</a>
                        <a href="#" class="sidebar-link">Mutasi Pegawai</a>
                    </div>
                </div>
                
                <!-- Akademik -->
                <div class="sidebar-group">
                    <button class="sidebar-group-toggle">
                        <span class="flex items-center gap-3"><ion-icon name="library-outline" class="w-5 h-5"></ion-icon><span>Akademik</span></span>
                        <ion-icon name="chevron-down-outline" class="w-4 h-4 transform transition-transform"></ion-icon>
                    </button>
                    <div class="sidebar-submenu">
                        <a href="../akademik/tahun_pelajaran.html" class="sidebar-link">Tahun Pelajaran</a>
                        <a href="../akademik/semester.html" class="sidebar-link">Semester</a>
                        <a href="../akademik/program_keahlian.html" class="sidebar-link">Program Keahlian</a>
                        <a href="../akademik/paket_keahlian.html" class="sidebar-link">Paket Keahlian</a>
                        <a href="../akademik/mapel.html" class="sidebar-link">Mata Pelajaran</a>
                        <a href="../akademik/ekstrakurikuler.html" class="sidebar-link">Ekstrakurikuler</a>
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
                        <a href="#" class="sidebar-link">Tunggakan</a>
                        <a href="#" class="sidebar-link">Pengeluaran</a>
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
                         <a href="#" class="sidebar-link">Data Lulusan</a>
                    </div>
                </div>
            </nav>
        </aside>
    `;
    
    document.getElementById('sidebar-placeholder').innerHTML = sidebarHTML;

    // Tambahkan style untuk sidebar baru
    const style = document.createElement('style');
    style.textContent = `
        .sidebar-group-toggle {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding: 0.625rem 1rem;
            font-size: 0.875rem;
            color: #374151;
            border-radius: 0.5rem;
            transition: all 0.2s ease;
        }
        .sidebar-group-toggle:hover {
            background-color: #F3F4F6;
            color: #1D4ED8;
        }
        .sidebar-submenu {
            display: none;
            padding-left: 2.25rem;
            margin-top: 0.25rem;
            border-left: 1px solid #E5E7EB;
            margin-left: 1.25rem;
        }
        .sidebar-submenu .sidebar-link {
            display: block;
            padding: 0.5rem 0.75rem;
            font-size: 0.875rem;
            color: #4B5563;
            border-radius: 0.375rem;
        }
        .sidebar-submenu .sidebar-link:hover {
            background-color: #DBEAFE;
            color: #1E40AF;
        }
        .sidebar-link.active-sub {
            background-color: #3B82F6;
            color: white;
            font-weight: 500;
        }
        .sidebar-link.active {
            background-color: #3B82F6;
            color: white;
            font-weight: 600;
        }
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
    const segments = path.split('/');
    // Ambil folder dan nama file, contoh: profil_sekolah/profil.html
    const pagePath = segments.slice(-2).join('/'); 
    
    // Cari link yang cocok persis
    const activeLink = document.querySelector(`.sidebar-link[href$="${pagePath}"]`);
    
    if (activeLink) {
        if (activeLink.closest('.sidebar-submenu')) {
            // Ini adalah link di dalam submenu
            activeLink.classList.add('active-sub');
            const submenu = activeLink.closest('.sidebar-submenu');
            const toggle = submenu.previousElementSibling;
            submenu.style.display = 'block';
            toggle.querySelector('ion-icon[name="chevron-down-outline"]').classList.add('rotate-180');
        } else {
            // Ini adalah link utama
            activeLink.classList.add('active');
        }
    }
}

document.addEventListener('DOMContentLoaded', buildSidebar);



