interface modalProps {
  display: boolean;
}

export default function Modal({ display }: modalProps) {
  if (!display) return <></>;
  return (
    <div>
      <p className="p-4 text-4xl text-center">
        Welcome to Beemoy&apos;s GlamouRNG Picker
      </p>
      <p className="py-2 font-bold">How this works:</p>
      <p className="pb-4">
        If you would like to pick a a random glamour for me, please fill in the
        form below! It will take the numbers you input to choose pieces that are
        available on the marketboard for level 1 jobs. Once you submit the form
        it will message me via Discord what you have selected and I will make
        the Glamour Plate! Items that are dyeable will allow you to have the
        option to submit another number for the dye.
      </p>
    </div>
  );
}
