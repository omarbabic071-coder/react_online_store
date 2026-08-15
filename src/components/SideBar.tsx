function SideBar() {
  return (
    <nav className="sticky top-16 self-start w-fit flex flex-col items-center bg-gray-300 p-3 h-[calc(100dvh-4rem)]">
      <p>
        Price range:{}-{}
      </p>
      <input type="range" name="" id="" min={0} max={9999} />
      <p>Rating</p>
      <input type="range" />
    </nav>
  );
}
export default SideBar;
