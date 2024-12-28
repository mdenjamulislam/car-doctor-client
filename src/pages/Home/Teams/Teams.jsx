
import TeamCard from "./TeamCard";

const Teams = () => {
    const teams = [
        {
            id: 1,
            name: "John Doe",
            role: "CEO",
            image: "../../../assets/images/1.jpg",
        },
        {
            id: 2,
            name: "Jane Doe",
            role: "CTO",
            image: "../../../assets/images/2.jpg",
        },
        {
            id: 3,
            name: "John Doe",
            role: "Engine Expert",
            image: "../../../assets/images/3.jpg",
        },
    ];
    return (
        <section className="sec-space">
            <div className="container">
                {/* Section-title */}
                <div className="mx-auto w-full text-center md:max-w-2xl">
                    <strong className="text-base text-accent md:text-lg">Team</strong>
                    <h2 className="heading-two">Meet Our Team</h2>
                    <p className="mt-3 md:mt-4">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                </div>

                {/* Teams */}
                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {teams.map((team) => <TeamCard key={team.id} team={team} />)}
                </div>
            </div>
        </section>
    );
};

export default Teams;
