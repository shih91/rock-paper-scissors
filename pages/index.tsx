import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const elements = {
	"1": {
		url: "https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/stone.png",
		alt: "it's a rock",
	},
	"2": {
		url: "https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/paper.png",
		alt: "it's a paper",
	},
	"3": {
		url: "https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/scissors.png",
		alt: "it's a scissors",
	},
};

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
				{Object.entries(elements).map(([key, element], i) => (
					<div className="m-8">
						<Image
							src={element.url}
							alt={element.alt}
							width={150}
							height={150}
							onClick={() => matchStart()}
							className={btn}
						/>
					</div>
				))}
			</div>

			<div className="flex p-4">
				<div className="border-2 border-dotted w-60 h-60 m-8">
					<p className="text-cyan-900 font-bold">You</p>
					<p className="justify-center">Score</p>
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
				<div className="border-2 border-dotted w-60 h-60 m-8">
					<p className="text-right text-cyan-900 font-bold">Computer</p>
					<p className="text-right justify-center">Score</p>
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
		</div>
	);
}
