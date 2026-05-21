import { useState } from "react";

function CreateRequest() {

    const [formData, setFormData] = useState({
        type: "leave",
        title: "",
        description: "",
        priority: "medium",
    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log("Request Submitted:", formData);

        alert("Request submitted successfully!");
    };

    return (
        <div className="max-w-3xl">

            <div className="mb-6">

                <h1 className="text-3xl font-bold text-gray-800">
                    Create Request
                </h1>

                <p className="text-gray-500 mt-1">
                    Submit a new workflow request
                </p>

            </div>

            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl shadow-sm p-6 space-y-6"
            >

                <div>

                    <label className="block mb-2 font-medium text-gray-700">
                        Request Type
                    </label>

                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                    >

                        <option value="leave">
                            Student Leave
                        </option>

                        <option value="budget">
                            Budget Approval
                        </option>

                        <option value="event">
                            Event Permission
                        </option>

                    </select>

                </div>

                <div>

                    <label className="block mb-2 font-medium text-gray-700">
                        Request Title
                    </label>

                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Enter request title"
                        required
                        className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />

                </div>

                <div>

                    <label className="block mb-2 font-medium text-gray-700">
                        Description
                    </label>

                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Describe your request"
                        required
                        className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />

                </div>

                <div>

                    <label className="block mb-2 font-medium text-gray-700">
                        Priority
                    </label>

                    <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                    >

                        <option value="low">
                            Low
                        </option>

                        <option value="medium">
                            Medium
                        </option>

                        <option value="high">
                            High
                        </option>

                    </select>

                </div>

                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all"
                >
                    Submit Request
                </button>

            </form>

        </div>
    );
}

export default CreateRequest;