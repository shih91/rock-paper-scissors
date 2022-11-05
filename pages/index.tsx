import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const btn =
	"hover:cursor-pointer hover:border-dotted hover:border-violet-500 border-4 rounded-full border-1";

const matchStart = () => {
	console.log("match start!");
};

export default function Home() {
	return (
		<div className="h-screen w-screen flex flex-col items-center relative">
			<Head>
				<title>Rock Paper Scissors!</title>
			</Head>
			<h1 className="text-3xl font-bold text-center p-8">
				Rock Paper Scissors!
			</h1>
			<div className="flex h-56 justify-item-center">
				<div className="m-8">
					<Image
						src="https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/stone.png"
						alt="it's a rock"
						width={150}
						height={150}
						onClick={() => matchStart()}
						className={btn}
					/>
				</div>
				<div className="m-8">
					<Image
						src="https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/paper.png"
						alt="it's a paper"
						width={150}
						height={150}
						onClick={() => matchStart()}
						className={btn}
					/>
				</div>
				<div className="m-8">
					<Image
						src="https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/scissors.png"
						alt="it's a scissors"
						width={150}
						height={150}
						onClick={() => matchStart()}
						className={btn}
					/>
				</div>
			</div>
		</div>
	);
}
