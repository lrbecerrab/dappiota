import communities from "../assets/communities.jpg";
import microgrid from "../assets/microgrid.png";
import architecture from "../assets/architecture.png";
import market from "../assets/market01.png";
import marketmeters from "../assets/market_meters.png";
import dapparchitecture from "../assets/dapparchitecture.png";

const Welcome = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-black text-start text-5xl p-10"> WELCOME</h1>
      <div className="p-10">
        <p className="text-black">
          NRG is a prototype proposed as{" "}
          <i>
            final project of the Mastery in Systems and Computing Engineering.
          </i>
          The objective of the prototype is that it seeks to allow people in
          communities to take advantage of distributed renewable energy
          resources through a distributed platform that allows commercial
          exchange between them without the intervention of a central operator.
          <br />
          <br />
          Distributed registry technologies have been selected in order to take
          advantage of their characteristics such as:
        </p>
        <ul className="text-black p-10">
          <li>Transparency</li>
          <li>Immutability</li>
          <li>Decentralization</li>
          <li>Security</li>
        </ul>
        <h1 className="font-bold uppercase text-lg">Microgrid</h1>
        <p className="text-black p-10">
          A microgrid is a local energy grid with control capability, which
          means it can disconnect from the traditional grid and operate
          autonomously. Microgrids are just one component of the emerging smart
          grid.
          <br />
          <br />
          <img
            src={microgrid}
            alt="microgrid"
            className="w-4/12 cursor-pointer"
          />
          <br />
          In a microgrid the energy consumers, generators and prosumers are
          grouped together, and they constitute a local market in which energy
          is sold. With the arrival of new prosumers, who are users who produce
          and consume electrical energy and therefore can participate in a local
          energy market to sell the surplus of their energy generation once they
          have supplied their consumption, the energy value chain has changed
          and new forms of the energy market have been enabled.
          <br />
          <br />
          <img src={market} alt="market" className="w-8/12 cursor-pointer" />
          <br />
          <br />
          In order to get the data of the energy consumption and generation of
          the microgrid, the smart meters are used.
          <br />
          <br />
          <img
            src={marketmeters}
            alt="market"
            className="w-8/12 cursor-pointer"
          />
          <br />
          <br />
        </p>
        <h1 className="font-bold uppercase text-lg">
          Transactive energy systems
        </h1>
        <p className="text-black p-10">
          The mechanisms that facilitate the integration of prosumers for energy
          exchange are known as transactive energy systems. The minimum
          characteristics that a transactive energy system must guarantee should
          be:
          <br />
          <br />
          <ul className="text-black">
            <li>Data security, (financial data is exchanged).</li>
            <li>Data privacy (avoid user profiling).</li>
            <li>Speed of execution of transactions (linear order).</li>
            <li>Resilience to failures.</li>
            <li>Information integrity.</li>
            <li>Reduced energy footprint.</li>
          </ul>
        </p>
        <h1 className="font-bold uppercase text-lg">
          Distributed ledger technologies
        </h1>
        <p className="text-black p-10">
          The use of distributed ledger technologies has been proposed as an
          enabler of distributed transactive energy systems so that local
          generators, prosumers and consumers can carry out their commercial
          operations in a secure virtual environment facilitated by the
          protection of information through the use of cryptographic hashes
        </p>
        <h1 className="font-bold uppercase text-lg">Prototype</h1>
        <p className="text-black p-10">
          The prototype is based on a distributed ledger technology: Blockchain.
          The design of the prototype is based on the following architecture:
          <br />
          <br />
          <img
            src={architecture}
            alt="architecture"
            className="w-8/12 cursor-pointer"
          />
        </p>
        It is made up of 3 layers:
        <br />
        <br />
        <h2 className="font-semibold">Field layer</h2>
        <br />
        The objective of this layer is to guarantee the necessary infrastructure
        for the distribution of energy within the microgrid. It includes smart
        energy meters, control devices and breakers that allow the
        activation/deactivation of energy exchange points.
        <br />
        <br />
        <h2 className="font-semibold">DLT layer</h2>
        <br />
        <br />
        This layer is responsible for the implementation of the TRD. It contains
        the interconnected nodes in a P2P network that allow the exchange of
        information.
        <br />
        <br />
        <h2 className="font-semibold">DAPP layer</h2>
        <br />
        <br />
        This layer consists in a distributed application that has been
        implemented according to the following figure:
        <br />
        <br />
        <img
          src={dapparchitecture}
          alt="Dapp architecture"
          className="w-8/12 cursor-pointer"
        />
        If you want to know more about the prototype, you can visit the
        following link:
        <br />
        <br />
        <a href="https://github.com/lrbecerrab/nrgytransact">
          https://github.com/lrbecerrab/nrgytransact
        </a>
      </div>
    </div>
  );
};

export default Welcome;
