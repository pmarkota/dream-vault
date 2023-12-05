import React, { useEffect, useLayoutEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useUser } from "../../services/api";
import { useCreateDream } from "../../services/dreamsApi";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

export const NewDreamForm = () => {
  const navigate = useNavigate();
  const [dreamDate, setDreamDate] = useState(null);
  const [dreamTitle, setDreamTitle] = useState("");
  const [dreamDescription, setDreamDescription] = useState("");
  const [isDreamPublic, setIsDreamPublic] = useState(false);
  const [visualDescription, setVisualDescription] = useState("");
  const [user, setUser] = useState({});
  const [generableImages, setGenerableImages] = useState(0);

  const createDreamMutation = useCreateDream();

  const userMutation = useUser();
  const token = localStorage.getItem("token");

  useLayoutEffect(() => {
    const data = userMutation.mutate(
      { token },
      {
        onSuccess: (data) => {
          setUser(data);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  }, []);
  const handleDateChange = (date) => {
    setDreamDate(date);
  };

  const handleDreamTitleChange = (e) => {
    setDreamTitle(e.target.value);
  };

  const handleDreamDescriptionChange = (e) => {
    setDreamDescription(e.target.value);
  };

  const handleDreamPublicChange = (e) => {
    setIsDreamPublic(e.target.checked);
  };

  const handleVisualDescriptionChange = (e) => {
    setVisualDescription(e.target.value);
  };

  const handleSubmit = () => {
    // Perform the submission logic here
    // You can use the form state values (dreamDate, dreamTitle, etc.) to send a POST request or perform other actions

    const data = createDreamMutation.mutate(
      {
        username: user.username,
        dreamTitle,
        dreamDescription,
        dreamVisualDescription: visualDescription,
        dreamDate,
        dreamPublic: isDreamPublic,
      },
      {
        onSuccess: (data) => {
          navigate("/dream-journal");
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };
  useEffect(() => {
    if (user.subscriptionPlanId === 1) {
      setGenerableImages(Math.max(5 - user.aiImagesGeneratedThisMonth, 0));
    } else {
      setGenerableImages(Math.max(35 - user.aiImagesGeneratedThisMonth, 0));
    }
  }, [user]);

  return (
    <div className="h-screen text-white">
      <form className="px-5 py-4 mx-3 mt-5 rounded-lg shadow-md bg-neutral-700 shadow-neutral-700">
        <div className="mb-6 ">
          <label
            htmlFor="dreamTitle"
            className="block mb-2 text-sm font-medium dark:text-white"
          >
            Dream title
          </label>
          <input
            id="dreamTitle"
            className="shadow-sm bg-gray-50 border text-black border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Forest dream"
            value={dreamTitle}
            onChange={handleDreamTitleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="dreamDesc"
            className="block mb-2 text-sm font-medium dark:text-white"
          >
            Dream description
          </label>
          <textarea
            id="dreamDesc"
            className="shadow-sm bg-gray-50 border text-black border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="The dream starts with me walking in a forest..."
            value={dreamDescription}
            onChange={handleDreamDescriptionChange}
            required
          />
        </div>
        {generableImages > 0 ? (
          <div className="mb-6">
            <label
              htmlFor="dreamVisualDesc"
              className="block mb-2 text-sm font-medium dark:text-white"
            >
              Visual Description for AI{" "}
              <span className="text-[10px] text-neutral-400">
                Shortly describe your dream visually to get an AI generated
                image of your dream
              </span>
            </label>
            <textarea
              id="dreamVisualDesc"
              className="shadow-sm bg-gray-50 border text-black border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="I was in a forest and I saw a lion"
              value={visualDescription}
              onChange={handleVisualDescriptionChange}
              required
            />
          </div>
        ) : (
          <div className="px-2 py-1 mb-3 rounded-lg shadow-lg bg-cyan-600 shadow-cyan-700">
            You have used up all your AI power for this month
          </div>
        )}
        <div>
          <label className="block mb-2 text-sm font-medium dark:text-white">
            Dream date
          </label>
          <DatePicker
            selected={dreamDate}
            onChange={(date) => setDreamDate(date)}
            className="w-full mx-auto text-black border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            isClearable
            showYearDropdown
            scrollableYearDropdown
            calendarClassName="bg-cyan-100"
            wrapperClassName="w-full mb-6 text-black border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>
        <div className="flex items-start mb-6">
          <label className="relative inline-flex items-center mb-5 cursor-pointer">
            <input
              type="checkbox"
              value={isDreamPublic}
              className="sr-only peer"
              onChange={() => setIsDreamPublic(!isDreamPublic)}
            />
            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-cyan-600"></div>
            <span className="text-sm font-medium ms-3 text-whitedark:text-gray-300">
              Public
            </span>
          </label>
        </div>
        <div className="flex justify-between">
          <p
            className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer transition-all ease-in-out duration-500 shadow-md shadow-cyan-800"
            onClick={() => handleSubmit()}
          >
            Create a dream
          </p>
          <p
            className="text-black  bg-neutral-300 hover:bg-neutral-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer transition-all ease-in-out duration-500 shadow-md shadow-neutral-500"
            onClick={() => navigate("/")}
          >
            Cancel
          </p>
        </div>
      </form>
    </div>
  );
};
