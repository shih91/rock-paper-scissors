import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const elements = {
	"1": {
		id: 1,
		url: "https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/stone.png",
		alt: "it's a rock",
	},
	"2": {
		id: 2,
		url: "https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/paper.png",
		alt: "it's a paper",
	},
	"3": {
		id: 3,
		url: "https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/scissors.png",
		alt: "it's a scissors",
	},
};

const btn =
	"hover:cursor-pointer hover:border-dotted hover:border-violet-500 border-4 rounded-full border-1";

export default function Home() {
	const [score, setScore] = useState({
		win: 0,
		lose: 0,
		total: 0,
	});

	const [hands, setHands] = useState({
		yourHand: 1,
		computerHand: 1,
	});

	const [winLose, setWinLose] = useState(0);

	const matchStart = (yourHand: number) => {
		let computerHand = Math.floor(Math.random() * 3 + 1);
		if (computerHand == yourHand) {
			// Draw, no harm no foul
			setWinLose(2);
			setScore({ win: score.win, lose: score.lose, total: score.total + 1 });
		} else if (
			(yourHand == 1 && computerHand == 3) ||
			(yourHand == 2 && computerHand == 1) ||
			(yourHand == 3 && computerHand == 2)
		) {
			// Win!
			setWinLose(1);
			setScore({
				win: score.win + 1,
				lose: score.lose,
				total: score.total + 1,
			});
		} else {
			// You suck!
			setWinLose(0);
			setScore({
				win: score.win,
				lose: score.lose + 1,
				total: score.total + 1,
			});
		}
		setHands({ yourHand: yourHand, computerHand: computerHand });
	};

	const drawHands = (hand: number) => {
		const currentHand = Object.values(elements).find(
			(element) => element.id === hand
		);

		return (
			<Image
				src={currentHand?.url}
				alt={currentHand?.alt}
				width={150}
				height={150}
				className={btn}
			/>
		);
	};

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
					<div className="m-8" key={key}>
						<Image
							src={element.url}
							alt={element.alt}
							width={150}
							height={150}
							onClick={() => matchStart(element.id)}
							className={btn}
						/>
					</div>
				))}
			</div>

			{score.total > 0 && winLose == 0 && <h1>You Suck!</h1>}
			{score.total > 0 && winLose == 1 && <h1>You Won!</h1>}
			{score.total > 0 && winLose == 2 && <h1>Life goes on..</h1>}

			<div className="flex p-4 md:p-0">
				<div className="border-2 border-dotted md:w-60 md:h-60 md:m-8  sm:m-4">
					<p className="text-cyan-900 font-bold">You</p>
					<p className="justify-center">Score {score.win}</p>
					<div className="md:m-8">{drawHands(hands.yourHand)}</div>
				</div>
				<div className="grid content-around">
					<h1 className="font-bold">VS</h1>
				</div>
				<div className="border-2 border-dotted md:w-60 md:h-60 md:m-8 sm:m-4">
					<p className="text-right text-cyan-900 font-bold">Computer</p>
					<p className="text-right justify-center">Score {score.lose}</p>
					<div className="md:m-8">{drawHands(hands.computerHand)}</div>
				</div>
			</div>
		</div>
	);
}
