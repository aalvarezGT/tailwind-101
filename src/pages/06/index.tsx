// Dealing with repetition 1
// Abstract components away

export default () => (
  <>
    <div className="flex flex-col w-40 gap-2 m-2">
      <button className="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black">
        Button 1
      </button>
      <button className="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black">
        Button 2
      </button>
      <button className="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black">
        Button 3
      </button>
    </div>
  </>
);

// const Button = (props: { children: React.ReactNode; onClick: () => void }) => (
//   <button
//     onClick={props.onClick}
//     className=""
//   >
//     {props.children}
//   </button>
// );
