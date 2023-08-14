import { useBootData } from "@/app/lib/useBootData";

export default function BootInputs() {
  const {
    boot,
    invalidBoot,
    allDyeGroups,
    invalidBootDyeGroup,
    invalidBootDye,
    handleBootChange,
    handleBootDyeGroup,
    handleBootDyeColor,
  } = useBootData();

  function displayError() {
    if (!invalidBoot && !invalidBootDye && !invalidBootDyeGroup) return <></>;
    return (
      <span className="pl-2 text-sm text-red-500">
        Invalid values for boot or dye
      </span>
    );
  }

  return (
    <div className="w-full">
      <label className="flex flex-wrap py-2 font-bold font-josefinsans basis-full">
        Boot:
        <p>{displayError()}</p>
        <input
          onChange={(e) => handleBootChange(e.target.value)}
          className={`w-full pl-2 font-normal border-solid outline-none focus:ring-0 border rounded border-2 ${
            invalidBoot
              ? "border-red-500 text-red-500"
              : "focus:border-secondary"
          }`}
          type="number"
          name="boot"
          min="1"
          max="72"
          placeholder="1-72"
        ></input>
      </label>
      <label className="w-full font-bold font-josefinsans">
        Dye:{" "}
        <input
          className={`w-1/3 mx-2 font-normal  border-solid outline-none focus:ring-0 border rounded border-2 ${
            invalidBootDyeGroup
              ? "border-red-500 text-red-500"
              : "focus:border-secondary"
          }`}
          type="number"
          name="dye-category"
          disabled={!boot.dyeable}
          placeholder="1-9"
          min="1"
          max="9"
          onChange={(e) => handleBootDyeGroup(e.target.value)}
        ></input>
        <input
          type="number"
          className={`w-1/3 mx-2 font-normal  border-solid outline-none focus:ring-0 border rounded border-2 ${
            invalidBootDye
              ? "border-red-500 text-red-500"
              : "focus:border-secondary"
          }`}
          name="dye-color"
          min="1"
          max={allDyeGroups[boot.dyeGroup].length}
          disabled={!boot.dyeable}
          placeholder={`1-${allDyeGroups[boot.dyeGroup].length}`}
          onChange={(e) => handleBootDyeColor(e.target.value)}
        ></input>
      </label>
    </div>
  );
}
