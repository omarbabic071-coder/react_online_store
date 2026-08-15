import {
  useState,
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
} from "react";

interface HeaderProps {
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

function Header({ setSearchQuery }: HeaderProps) {
  const [enteredQuery, setEnteredQuery] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredQuery(e.target.value);
  };

  const handleProductSearch = () => {
    setSearchQuery(enteredQuery);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 flex h-16 items-center justify-between gap-4 bg-gray-300 px-4">
      <p className="text-2xl font-sans font-bold">React Store</p>
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={enteredQuery}
          onChange={handleInputChange}
          className="bg-white border p-1 rounded-xl"
        />
        <button
          className="rounded-xl bg-white p-1 border hover:bg-gray-300 active:bg-gray-500 transition"
          onClick={handleProductSearch}
        >
          Search
        </button>
      </div>
      <p>Products: 3</p>
    </nav>
  );
}

export default Header;
