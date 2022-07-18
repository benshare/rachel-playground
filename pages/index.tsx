import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import type { NextPage } from "next"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Rachel playground</title>
				<meta
					name="description"
					content="Rachel's test code while learning HTML"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to Rachel's code playground
				</h1>

				<div>
					<div className={styles.description}>My projects</div>
					<div className={styles.grid}>
						<Link href="/chess">
							<div className={styles.card}>
								<>
									<h2>Chess</h2>
									<p>A rendering of a chess board</p>
								</>
							</div>
						</Link>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Home
