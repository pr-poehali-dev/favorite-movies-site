import { useState } from "react";
import Icon from "@/components/ui/icon";

const FILMS = [
  {
    id: 1,
    title: "Гарри Поттер и философский камень",
    year: 2001,
    genre: "Фэнтези",
    rating: 7.9,
    duration: "2ч 32м",
    director: "Крис Коламбус",
    description: "Одиннадцатилетний мальчик узнаёт, что он волшебник, и поступает в школу магии Хогвартс.",
    poster: "https://cdn.poehali.dev/projects/393a1f77-43b6-4556-b0a0-482590e4d60e/files/fab43c77-8b6b-47b4-9e0a-c36be546f83d.jpg",
    kinopoisk: "https://www.kinopoisk.ru/film/689/",
  },
  {
    id: 2,
    title: "В метре друг от друга",
    year: 2019,
    genre: "Драма",
    rating: 7.4,
    duration: "1ч 56м",
    director: "Джастин Балдони",
    description: "Двое подростков с муковисцидозом влюбляются, но не могут приближаться друг к другу ближе метра.",
    poster: "https://cdn.poehali.dev/projects/393a1f77-43b6-4556-b0a0-482590e4d60e/files/dfb5e524-0f24-48c8-a855-9964c2cf9ed7.jpg",
    kinopoisk: "https://www.kinopoisk.ru/film/1143242/",
  },
  {
    id: 3,
    title: "Трансформеры",
    year: 2007,
    genre: "Боевик",
    rating: 7.1,
    duration: "2ч 24м",
    director: "Майкл Бэй",
    description: "Инопланетные роботы прибывают на Землю, и судьба планеты оказывается в руках обычного подростка.",
    poster: "https://cdn.poehali.dev/projects/393a1f77-43b6-4556-b0a0-482590e4d60e/files/4e27686c-0c7f-4049-94aa-872651ba5f4c.jpg",
    kinopoisk: "https://www.kinopoisk.ru/film/279863/",
  },
];

export default function Index() {
  const [selectedFilm, setSelectedFilm] = useState<typeof FILMS[0] | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="px-8 md:px-16 pt-12 pb-8 flex items-end justify-between border-b border-border">
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground font-sans mb-2">
            Каталог
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-light text-foreground leading-none">
            Кино
          </h1>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground pb-2">
          <Icon name="Film" size={16} />
          <span className="text-xs tracking-widest font-sans">{FILMS.length} фильма</span>
        </div>
      </header>

      {/* Films Grid */}
      <main className="px-8 md:px-16 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {FILMS.map((film, i) => (
            <article
              key={film.id}
              className={`film-card animate-fade-up`}
              style={{ animationDelay: `${i * 0.08}s` }}
              onClick={() => setSelectedFilm(film)}
            >
              {/* Poster */}
              <div className="relative overflow-hidden aspect-[3/4] bg-muted mb-5 cursor-pointer">
                <img
                  src={film.poster}
                  alt={film.title}
                  className="film-poster w-full h-full object-cover"
                />
                <div className="film-overlay absolute inset-0 bg-foreground/80 flex flex-col justify-end p-6">
                  <p className="text-background/80 text-xs font-sans tracking-widest uppercase mb-2">
                    {film.director}
                  </p>
                  <p className="text-background font-display text-lg font-light leading-snug">
                    {film.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-background/60">
                    <Icon name="Clock" size={12} />
                    <span className="text-xs font-sans">{film.duration}</span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-display text-2xl font-light text-foreground leading-tight mb-1">
                    {film.title}
                  </h2>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="text-xs font-sans">{film.year}</span>
                    <span className="w-1 h-1 rounded-full bg-border inline-block" />
                    <span className="text-xs font-sans tracking-wide">{film.genre}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 shrink-0 pt-1">
                  <Icon name="Star" size={12} className="text-foreground fill-foreground" />
                  <span className="text-sm font-sans font-medium text-foreground">{film.rating}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Film Modal */}
      {selectedFilm && (
        <div
          className="fixed inset-0 bg-foreground/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedFilm(null)}
        >
          <div
            className="bg-background max-w-2xl w-full flex flex-col md:flex-row overflow-hidden animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="md:w-64 shrink-0 aspect-[3/4] md:aspect-auto overflow-hidden">
              <img
                src={selectedFilm.poster}
                alt={selectedFilm.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-sans mb-2">
                      {selectedFilm.genre} · {selectedFilm.year}
                    </p>
                    <h2 className="font-display text-3xl font-light text-foreground leading-tight">
                      {selectedFilm.title}
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedFilm(null)}
                    className="text-muted-foreground hover:text-foreground transition-colors mt-1 ml-4 shrink-0"
                  >
                    <Icon name="X" size={18} />
                  </button>
                </div>
                <p className="font-display text-lg font-light text-foreground/80 leading-relaxed mb-6 italic">
                  {selectedFilm.description}
                </p>
                <div className="space-y-2 text-sm font-sans">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Icon name="User" size={14} />
                    <span>{selectedFilm.director}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Icon name="Clock" size={14} />
                    <span>{selectedFilm.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Icon name="Star" size={14} />
                    <span>{selectedFilm.rating} / 10</span>
                  </div>
                </div>
              </div>
              <a
                href={selectedFilm.kinopoisk}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full py-3 bg-foreground text-background text-xs tracking-[0.2em] uppercase font-sans hover:bg-foreground/80 transition-colors flex items-center justify-center gap-2"
              >
                <Icon name="ExternalLink" size={14} />
                Смотреть на Кинопоиске
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="px-8 md:px-16 py-8 border-t border-border mt-8 flex items-center justify-between">
        <p className="font-display text-lg font-light italic text-muted-foreground">Кино</p>
        <p className="text-xs font-sans text-muted-foreground tracking-widest">© 2024</p>
      </footer>
    </div>
  );
}
