const Setting = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-black text-start text-5xl p-10">
        {" "}
        Configuring an account
      </h1>
      <div className="p-10">
        <p className="text-black">
          In order to able the use of the platform, you must meet some
          requirements:
          <br />
          <br />
        </p>
        <ol className="text-black p-10">
          <li>
            1. Metamask installed in the browser of your choice on your device.
            In order to facilitate please use the instructions on{" "}
            <a
              href="https://metamask.io/download/"
              className="underline text-blue-800"
            >
              Metamask homepage
            </a>
          </li>

          <li>
            2. In order to be able in the energy market you need an account, it
            will be used as Prosumer account to use it in the Energy Market.
            Please create it.
          </li>
          <li>
            3. Please create an account for each meter you want to register in
            the Energy Market
          </li>
          <li>
            4. In order to register a meter in the Energy Market, you need
            select the Account option in the navigation bar
          </li>
          <li>
            5. So, you must to fill the form with the information of the meter:
            Meter Address (use the account address that you create in the step
            3), Rate (the rate for sell energy in NRG/KWh),
          </li>
          <li>6. Please, click on the Add meter button</li>
        </ol>
      </div>
    </div>
  );
};

export default Setting;
