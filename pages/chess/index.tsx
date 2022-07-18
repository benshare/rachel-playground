import styles from "./index.module.css"

export default function ChessBoard() {
	const squares: JSX.Element[] = []

	for (let row = 0; row < 8; row++) {
		for (let column = 0; column < 8; column++) {
			let text = ""
			if (row === 1 || row === 6) {
				text = "Pawn"
			} else if (row === 0 || row === 7) {
				if (column === 0 || column === 7) {
					text = "Rook"
				} else if (column === 1 || column === 6) {
					text = "Knight"
				} else if (column === 2 || column === 5) {
					text = "Bishop"
				} else if (column === 3) {
					text = "King"
				} else if (column === 4) {
					text = "Queen"
				}
			}

			let className = ""
			if (row % 2 === 0) {
				if (column % 2 === 0) {
					className = styles.square1
				} else {
					className = styles.square2
				}
			} else {
				if (column % 2 === 1) {
					className = styles.square1
				} else {
					className = styles.square2
				}
			}

			squares.push(<div className={className}>{text}</div>)
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.titles}>
				<h1 className={styles.header}>Rachel's Fancy Chess Board</h1>
				<h2 className={styles.subheader}>copyright RSS 2022</h2>
			</div>

			<div className={styles.grid}>{squares}</div>
		</div>
	)
}
