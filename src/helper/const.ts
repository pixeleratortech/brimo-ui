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

export const anotherFeature = [
    { id: 1, name: "Asuransi", icon: "/icons/assurance_icon.svg" },
    { id: 2, name: "Debit Virtual", icon: "/icons/assurance_icon.svg" },
    { id: 3, name: "Donasi", icon: "/icons/assurance_icon.svg" },
    { id: 4, name: "Kartu Kredit", icon: "/icons/assurance_icon.svg" },
    { id: 5, name: "Pinjaman", icon: "/icons/assurance_icon.svg" },
    { id: 6, name: "Setor Tarik Tunai", icon: "/icons/assurance_icon.svg" },
    { id: 7, name: "Tagihan", icon: "/icons/assurance_icon.svg" },
]