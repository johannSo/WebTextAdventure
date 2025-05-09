import { useEffect, useState } from "react";
import { Global } from "../global";

function Terminal() {
  if (Global.cheated || localStorage.getItem("cheated") === "true") {
    localStorage.setItem("cheated", "true");
    window.location.href = "/txtadv/#/cheat";
  }

  const [outputText, setOutputText] = useState("");
  const [buttonVisible, setButtonVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loginError, setLoginError] = useState(false);
  const typingSpeed = 300;
  const totalSteps = 6;

  const generateRandomPassword = () => {
    const length = 8;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }
    return generatedPassword;
  };

  useEffect(() => {
    const generatedPassword = generateRandomPassword();
    setPassword(generatedPassword);

    const delay = 5000;

    const timeoutId = setTimeout(() => {
      let step = 0;
      const intervalId = setInterval(() => {
        if (step < totalSteps) {
          const percentage = step * (100 / (totalSteps - 1));
          const textToPrint = `Bruteforce ${Math.round(percentage)}% done`;
          setOutputText((prevText) => prevText + textToPrint + "\n");
          step++;
        } else {
          clearInterval(intervalId);
          setButtonVisible(true);
          setOutputText((prevText) => prevText + `\nUsername found: admin\nPassword found: ${generatedPassword}\n`);
        }
      }, typingSpeed);

      return () => clearInterval(intervalId);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [typingSpeed, totalSteps]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.username === "admin" && formData.password === password) {
      setLoginError(false);
      window.location.href = "/txtadv/#/ende";
    } else {
      setLoginError(true);
    }
  };

  return (
    <div className="bg-main">
      <p>
        Du kopierst die Daten vom Laptop auf deine SSD 💾.
        <br />
        Zuhause startest du dein Bruteforce-Programm...
        <br />
      </p>
      <div className="bg-zinc-900 text-green-400 font-mono p-4 mr-10 ml-10 rounded-md mt-2 shadow-lg">
        <pre className="whitespace-pre-wrap">
          <span>{outputText}</span>
        </pre>
      </div>
      <div className="flex flex-col items-center justify-center">
        {buttonVisible && (
          <div className="bg-zinc-900 mt-10 rounded-md">
            <form onSubmit={handleLogin} className="mt-5 flex flex-col gap-4 w-80 mr-5 ml-5 mb-5">
              <h2 className="text-xl font-bold text-center mb-4">Login zu beste.schule</h2>
              <div className="flex flex-col gap-2">
                <label htmlFor="login-username" className="text-sm font-medium">
                  Username:
                </label>
                <input
                  id="login-username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="login-password" className="text-sm font-medium">
                  Password:
                </label>
                <input
                  id="login-password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
              {loginError && (
                <p className="text-red-500 text-sm">Incorrect username or password. Please try again.</p>
              )}
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Login
              </button>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400 cursor-not-allowed">Create Account</span>
                <span className="text-gray-400 cursor-not-allowed">Forgot Password?</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Terminal;
