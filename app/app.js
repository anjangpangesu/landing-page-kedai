document.addEventListener("alpine:init", () => {
  Alpine.data("menu", () => ({
    items: [
      {
        id: 1,
        name: "Nasi Gorang",
        desc: "Nasi goreng biasa dengan lalapan dan acar",
        img: `1.jpg`,
        price: 15000,
      },
      {
        id: 2,
        name: "Mie Goreng",
        desc: "Mie goreng biasa dengan acar dan bawang goreng",
        img: `2.jpg`,
        price: 8000,
      },
      {
        id: 3,
        name: "Mie Rebus",
        desc: "Mie rebus biasa dengan bumbu ikonik dan toping sayuran",
        img: `3.jpg`,
        price: 8000,
      },
      {
        id: 4,
        name: "Nasi Goreng Spesial",
        desc: "Nasi goreng dengan telor, bakso, sosis, dan ati ampela",
        img: `4.jpg`,
        price: 20000,
      },
      {
        id: 5,
        name: "Mie Goreng Spesial",
        desc: "Mie goreng dengan telor, bakso, dan sosis",
        img: `5.jpg`,
        price: 15000,
      },
    ],
  }));
});

//Konversi ke Rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
