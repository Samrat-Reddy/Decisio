import {
    FaCheckCircle,
    FaClock,
    FaRegCircle,
} from "react-icons/fa";

function WorkFlowTimeLine({ steps }) {
    const getStepIcon = (status) => {

        if(status === "approved") {
            return (
                <FaCheckCircle className="text-green-500"/>
            );
        }

        if (status === "pending") {
            return (
                <FaClock className="text-yellow-500" />
            );
        }

        return (
            <FaRegCircle className="text-gray-400" />
        );
    };

    return (
        <div className="bg-white rounded-xl shadow-sm p-6">

            <h2 className="text-xl font-bold text-gray-800 mb-6">
                Workflow Progress
            </h2>

            <div className="flex flex-col gap-6">

                {steps.map((step, index) => (

                    <div
                        key={index}
                        className="flex items-start gap-4 relative"
                    >

                        <div className="flex flex-col items-center">

                            <div className="text-2xl">
                                {getStepIcon(step.status)}
                            </div>

                            {index !== steps.length - 1 && (
                                <div className="w-1 h-12 bg-gray-300 mt-2"></div>
                            )}

                        </div>

                        <div>

                            <h3 className="font-semibold text-gray-800 capitalize">
                                {step.role}
                            </h3>

                            <p className="text-sm text-gray-500 capitalize">
                                {step.status}
                            </p>

                            {step.comment && (
                                <p className="text-sm text-gray-600 mt-1">
                                    "{step.comment}"
                                </p>
                            )}

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default WorkFlowTimeLine;