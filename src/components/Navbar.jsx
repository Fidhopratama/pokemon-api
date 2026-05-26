import logoUB from '../assets/logo_ub.png';

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav
      className="
        bg-gradient-to-r
        from-slate-900
        to-slate-800
        text-white
        rounded-2xl
        shadow-2xl
        p-6
        mb-8
        flex
        flex-col
        lg:flex-row
        justify-between
        items-center
        gap-6
      "
    >

      {/* LEFT SECTION */}
      <div className="flex items-center gap-5 w-full">

        {/* LOGO */}
        <img
          src={logoUB}
          alt="Logo UB"
          className="
            w-20
            h-20
            object-contain
            drop-shadow-lg
          "
        />

        {/* TEXT */}
        <div>

          {/* TITLE */}
          <h1
            className="
              text-3xl
              md:text-5xl
              font-extrabold
              leading-tight
            "
          >
            Pokemon Dashboard PJBL - Pertemuan 12
          </h1>

          {/* SUBTITLE */}
          <p
            className="
              text-gray-300
              mt-1
              text-sm
              md:text-base
            "
          >
            Universitas Brawijaya
          </p>

          {/* BIODATA */}
          <div
            className="
              mt-3
              space-y-1
              text-sm
              md:text-base
            "
          >

            <p>
              <span className="font-semibold">
                Nama:
              </span>{' '}
              Muhammad Fidho Pratama
            </p>

            <p>
              <span className="font-semibold">
                NIM:
              </span>{' '}
              253140707111029
            </p>

            <p>
              <span className="font-semibold">
                Kelas:
              </span>{' '}
              T2E
            </p>

          </div>

        </div>

      </div>

      {/* RIGHT SECTION */}
      <div
        className="
          flex
          flex-wrap
          gap-3
          justify-center
        "
      >

        {/* GITHUB BUTTON */}
        <a
          href="https://github.com/Fidhopratama"
          target="_blank"
          rel="noreferrer"
          className="
            bg-gray-700
            hover:bg-black
            px-5
            py-3
            rounded-xl
            font-semibold
            transition-all
            duration-300
            hover:scale-105
            shadow-md
          "
        >
          GitHub
        </a>

        {/* DARK MODE BUTTON */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="
            bg-black
            hover:bg-gray-900
            px-5
            py-3
            rounded-xl
            font-semibold
            transition-all
            duration-300
            hover:scale-105
            shadow-md
          "
        >
          {darkMode ? ' Light Mode' : ' Dark Mode'}
        </button>

      </div>

    </nav>
  );
}