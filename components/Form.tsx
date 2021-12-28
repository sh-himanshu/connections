import { useState } from "react";
import { useConnectContext } from "../context/ConnectionContextProvider";

const Form = () => {
  const value = useConnectContext();
  const [friend, setFriend] = useState("");
  const [name, setName] = useState("");
  return (
    <div className="flex  md:items-start justify-center z-30 items-center  flex-1">
      <form
        className="flex flex-col  bg-blue-500 space-y-5 p-5 mr-4 mt-4 rounded-2xl shadow-md"
        onSubmit={async (e) => {
          e.preventDefault();
          if (value) {
            if (value.data.find((el) => el.name === name))
              return alert(`"${name}" Already Exist !`);
            value.setData((prev) => [...prev, { name, friends: [friend] }]);
          }
        }}
      >
        <div className="flex items-center justify-between">
          <label
            className="uppercase font-semibold tracking-wide"
            htmlFor="add-name"
          >
            Name:
          </label>
          <input
            type="text"
            id="add-name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-md h-10 px-2 ml-2 outline-none"
            placeholder="Enter a name"
          />
        </div>
        <div className="flex items-center justify-between">
          <label
            className="uppercase font-semibold tracking-wide"
            htmlFor="friend-choice"
          >
            Friend:
          </label>
          <input
            list="choose-friend"
            id="friend-choice"
            name="ice-cream-choice"
            onChange={(e) => setFriend(e.target.value)}
            value={friend}
            className="rounded-md h-10 px-2 ml-2 outline-none"
            placeholder="Choose a Friend"
          />

          <datalist id="choose-friend">
            {value?.data &&
              value.data.map((el, index) => (
                <option value={el.name} key={index} />
              ))}
          </datalist>
        </div>

        <input
          type="submit"
          value="Add User"
          className="rounded-full text-lg uppercase  py-2"
        />
      </form>
    </div>
  );
};

export default Form;
