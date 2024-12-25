const CallToAction = () => {
    const ctaData = [
        {
            title: "We are opern monday-friday",
            cont: "7:00 am - 9:00 pm",
            icon: "https://i.ibb.co.com/L8hRQnn/001-timetable.png",
        },
        {
            title: "Have a question?",
            cont: "+2546 251 2658",
            icon: "https://i.ibb.co.com/88yhSvy/phone.png",
        },
        {
            title: "Need a repair? our address",
            cont: "Liza Street, New York",
            icon: "https://i.ibb.co.com/L0rpvC4/location.png",
        },
    ];

    return (
        <section className="sec-space">
            <div className="container">
                <div className="flex flex-col items-center justify-center gap-8 rounded-xl bg-dark1 px-6 py-8 md:flex-row md:justify-between md:px-10 md:py-16 lg:px-16 lg:py-24">
                    {ctaData.map((data, index) => {
                        console.log(data.icon);
                        return (
                            <div key={index} className="flex items-center gap-3 md:gap-5 text-white">
                                <img src={data.icon} alt="" />
                                <div className="space-y-2">
                                    <p>{data.title}</p>
                                    <h3 className="text-lg md:text-2xl font-semibold">{data.cont}</h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
