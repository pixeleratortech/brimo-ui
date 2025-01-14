export const navLink = [
    {
        name: "Fitur", href: "#", hasDropdown: true, hasChildren: true,
        dropdownItems: [
            {
                title: "Buka Tabungan", link: [
                    { name: "Sudah Punya Rekening", href: "/" },
                    { name: "Belum Punya Rekening", href: "/" },
                ]
            },
            {
                title: "Everyday Banking", link: [
                    { name: "Top Up", href: "/" },
                    { name: "QRIS Transfer", href: "/" },
                    { name: "Cek Saldo", href: "/" },
                    { name: "Cek Mutasi", href: "/" },
                ]
            },
            {
                title: "Highlight Fitur", link: [
                    { name: "Lifestyle", href: "/" },
                    { name: "Investasi", href: "/" },
                    { name: "Valas", href: "/" },
                ]
            },
            {
                title: "Fitur Lainnya", link: [
                    { name: "Asuransi", href: "/" },
                    { name: "Debit Virtual", href: "/" },
                    { name: "Donasi", href: "/" },
                    { name: "Kartu Kredit", href: "/" },
                    { name: "Pinjaman", href: "/" },
                    { name: "Setor dan Tarik Tunai", href: "/" },
                    { name: "Tagihan", href: "/" },
                ]
            },
        ],
    },
    {
        name: "Promo",
        href: "#",

    },
    {
        name: "Bantuan", href: "#", hasDropdown: true,
        dropdownItems: [
            { name: "Blog & Article", href: "/" },
            { name: "FAQ", href: "/" },
            { name: "Hubungi Kami", href: "/" },
        ],
    },
    { name: "BRImo FSTVL", href: "#" },
];

export const featureFilter = [
    { id: 1, name: "Asuransi", icon: "/icons/assurance_icon.svg" },
    { id: 2, name: "Debit Virtual", icon: "/icons/virtual_debit_icon.svg" },
    { id: 3, name: "Donasi", icon: "/icons/investasi_icon.svg" },
    { id: 4, name: "Kartu Kredit", icon: "/icons/kartu_kredit_icon.svg" },
    { id: 5, name: "Pinjaman", icon: "/icons/pinjaman_icon.svg" },
    { id: 6, name: "Setor Tarik Tunai", icon: "/icons/atm_icon.svg" },
    { id: 7, name: "Tagihan", icon: "/icons/tagihan_icon.svg" },
]

export const productLinks = [
    { id: 1, label: "Buka Tabungan", href: "/" },
    { id: 2, label: "Everyday Banking", href: "/" },
    { id: 3, label: "Highlight Fitur", href: "/" },
    { id: 4, label: "Fitur Lainnya", href: "/" },
];

export const promoLinks = [
    { id: 1, label: "Food & Beverages", href: "/" },
    { id: 2, label: "Groceries", href: "/" },
    { id: 3, label: "Lifestyle & Entertainment", href: "/" },
    { id: 4, label: "Travel & Transportation", href: "/" },
    { id: 5, label: "Gadget & Electronics", href: "/" },
    { id: 6, label: "Others", href: "/" },
];

export const helpLinks = [
    { id: 1, label: "Blog and Article", href: "/" },
    { id: 2, label: "FAQ", href: "/" },
    { id: 3, label: "Hubungi Kami", href: "/" },
];