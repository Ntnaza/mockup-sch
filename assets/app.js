// File: assets/app.js

// Objek utama aplikasi untuk menampung data dan fungsi bersama
const App = {
    helpers: {
        formatRupiah: (number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number),
        showToast: (message, type = 'success') => {
            const toastContainer = document.getElementById('toast-container');
            if (!toastContainer) return;
            const toast = document.createElement('div');
            const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
            toast.className = `${bgColor} text-white py-2 px-4 rounded-lg shadow-lg opacity-0 transform translate-y-2 toast`;
            toast.textContent = message;
            toastContainer.appendChild(toast);
            setTimeout(() => {
                toast.classList.remove('opacity-0', 'translate-y-2');
                toast.classList.add('opacity-100', 'translate-y-0');
            }, 10);
            setTimeout(() => {
                toast.classList.remove('opacity-100', 'translate-y-0');
                toast.classList.add('opacity-0', 'translate-y-2');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        },
        getToday: () => new Date().toISOString().slice(0, 10),
    },
    
    masterData: {
        siswa: {
            "10 IPA 1": ["Ahmad Fauzi", "Budi Santoso", "Citra Lestari", "Dewi Anggraini", "Eko Prasetyo"],
            "11 IPS 2": ["Fajar Nugraha", "Gita Permata", "Hadi Wijaya", "Indah Sari", "Joko Susilo"],
            "12 Bahasa": ["Kartika Putri", "Lia Amelia", "Mega Utami", "Nina Rosdiana", "Putra Bangsa"]
        },
        guru: [
            { id: 'G01', nama: 'Dr. Indah Permata, M.Pd.', nip: '1975...' },
            { id: 'G02', nama: 'Bambang Subagio, S.Kom.', nip: '1980...' },
            { id: 'G03', nama: 'Siti Nurhaliza, S.Pd.', nip: '1985...' },
            { id: 'G04', nama: 'Agus Wijayanto, S.S.', nip: '1990...' },
        ],
        mapel: ["Matematika", "Fisika", "Bahasa Indonesia", "Sejarah"],
    },
};

// Menutup semua modal saat tombol 'cancel' atau area luar diklik
document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal') || e.target.classList.contains('close-modal-btn') || e.target.classList.contains('cancel-modal-btn')) {
        document.querySelectorAll('.modal').forEach(m => m.classList.add('hidden'));
    }
});
