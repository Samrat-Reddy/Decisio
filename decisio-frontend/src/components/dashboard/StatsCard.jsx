function StatsCard({
    title,
    value,
    icon,
    color,
                   }) {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6 flex items-center justify-between">

            <div>

                <p className="text-sm text-gray-500 mb-1">
                    {title}
                </p>

                <h2 className="text-3xl front-bold text-gray-800">
                    {value}
                </h2>

            </div>

            <div
                className={`text-white p-4 rounded-xl ${color}`}
                >
                {icon}
            </div>

        </div>
    );
}

export default StatsCard;