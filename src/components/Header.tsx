import { type ChangeEvent } from "react";

interface HeaderProps {
  searchQuery: string;
  onSearchQueryChange: (value: string) => void;
}

function Header({ searchQuery, onSearchQueryChange }: HeaderProps) {
  const handleProductSearch = (e: ChangeEvent<HTMLInputElement>) => {
    onSearchQueryChange(e.target.value);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 flex h-16 items-center justify-between gap-4 bg-gray-300 px-4">
      <p className="text-2xl font-sans font-bold">React Store</p>
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={searchQuery}
          className="bg-white border p-1 rounded-xl"
          onChange={handleProductSearch}
        />
        <button className="rounded-xl bg-white p-1 border hover:bg-gray-300 active:bg-gray-500 transition">
          Search
        </button>
      </div>
      <p>Products: 3</p>
    </nav>
  );
}

export default Header;
