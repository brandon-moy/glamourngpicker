export default function GlamourForm() {
  return (
    <form className="flex flex-wrap">
      <label className="flex flex-col basis-1/2">
        Helmet
        <input className="w-5/6" type="number" name="helmet" min="1"></input>
      </label>
      <label className="flex flex-col basis-1/2">
        Chest
        <input className="w-5/6" type="number" name="chest" min="1"></input>
      </label>
      <label className="flex flex-col basis-1/2">
        Gloves
        <input className="w-5/6" type="number" name="gloves" min="1"></input>
      </label>

      <label className="flex flex-col basis-1/2">
        Legs
        <input className="w-5/6" type="number" name="legs" min="1"></input>
      </label>
      <label className="flex flex-col basis-1/2">
        Boots
        <input className="w-5/6" type="number" name="boots" min="1"></input>
      </label>
    </form>
  );
}
