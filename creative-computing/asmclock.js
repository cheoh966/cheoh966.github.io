// small circle radius
const r1 = 5
const r2 = 10
const r3 = 15
const width = window.innerWidth
const height = window.innerHeight

const minWH = Math.min(width, height)

let maxSize
if (minWH < 430) {
	maxSize = minWH - 30
} else {
	maxSize = 400
}

// utils
// deg to radian
const rad = a => Math.PI * (a - 90) / 180

// relative polar coordinates
const rx = (r, a, c) => c + r * Math.cos(rad(a, c))

const ry = (r, a, c) => c + r * Math.sin(rad(a))

// get hours, minutes, and seconds
const HMS = t => ({
	h: t.getHours(),
	m: t.getMinutes(),
	s: t.getSeconds()
})

const pathStringVars = (c, r, time) => {
	// center, radius and time = this.props		
	// const {c,r,time} = p
	const {h, m, s} = HMS(time)

	// divide 360 deg by 12hrs, 60min, and 60s 
	const hAngFact = 30
	const mAngFact = 6
	const sAngFact = 6

	// calc relative coordinates 		
	const hx = rx((r - 30), (hAngFact * h), c)
	const hy = ry((r - 30), (hAngFact * h), c)
	const mx = rx((r - 30), (mAngFact * m), c)
	const my = ry((r - 30), (mAngFact * m), c)
	const sx = rx((r - 30), (sAngFact * s), c)
	const sy = ry((r - 30), (sAngFact * s), c)

	return { hx, hy, mx, my, sx, sy }
}

const TextTime = ({ x, y, time }) => {
	const str = time.toTimeString().slice(0, 8).replace(/:/g, " : ")
	return (
		<text x={x} y={y} className='textTime'>
			{str}
		</text>
	)
}

// Circle component
const Circle = ({cx, cy, r, cl}) => (
	<circle 
		cx={cx} 
		cy={cy} 
		r={r} 
		className={cl} 
	/>
)

// Single spike
const Spike = ({x1, x2, y1, y2}) => (
	<line
		className="spike" 
		x1={x1}
		x2={x2}
		y1={y1}
		y2={y2}
	/>
)

const spikeNodes = (c, r) => {
	const increment = 30
	const nodes = []
	
	for(let i=1; i<13; i++) {
		let ang = i * increment

		let temp = (
			<Spike 
				x1={rx(r-5, ang, c)}
				x2={rx((r-10), ang, c)}
				y1={ry(r-5, ang, c)}
				y2={ry((r-10), ang, c)}
				key={i}
			/>
		)
		nodes.push(temp)
	}
	return nodes
}

// populate Spikes
const Spikes = ({c, r}) => (
	<g>
		{spikeNodes(c, r)}
	</g>
)

// triangle component
const Triangle = ({c, r, time}) => {
	const {hx, hy, mx, my, sx, sy} = pathStringVars(c, r, time)
	const path = `M${hx},${hy} L${mx},${my} L${sx},${sy} L${hx},${hy}`
	return (
		<path 
			className='triangle'
			d={path}
		/>
	)
}

// Secondary circles
const SecCircle = ({c, r, time}) => {
	const {hx, hy, mx, my, sx, sy} = pathStringVars(c, r, time)
	return (
		<g>
			<Circle cl="secCircle" cx={hx} cy={hy} r={r3} />
			<Circle cl="secCircle" cx={mx} cy={my} r={r2} />
			<Circle cl="secCircle" cx={sx} cy={sy} r={r1} />
		</g>
	)
}

// main container
class Clock extends React.Component {
	constructor() {
		super()
		
		this.state = {
			time: new Date()
		}
	}
	
	componentDidMount() {
		window.setInterval(() => {
			this.setState({
				time: new Date()
			})
		}, 1000)		
	}

  render() {

		const size = maxSize

		const viewBox = `0 0 ${size} ${size}`

		const mid = size / 2
		
		const paddedRadius = (size - 30) / 2

		return (
			<svg xmlns="http://www.w3.org/svg/2000"
					viewBox={viewBox}
					width={size}
					height={size}>
				<Circle
					cl="outerRing" 
					cx={mid} 
					cy={mid} 
					r={mid - 5}
				/>
				<Circle
					cl="primCircle" 
					cx={mid} 
					cy={mid} 
					r={mid - 15}
				/>
				<Spikes 
					c={mid} 
					r={paddedRadius} 
				/>
				<Triangle 
					c={mid} 
					r={paddedRadius} 
					time={this.state.time} 
				/>
				<SecCircle 
					c={mid} 
					r={paddedRadius} 
					time={this.state.time} 
				/>
				<TextTime 
					time={this.state.time} 
					x={mid}
					y={mid}
				/>
			</svg>
		)
  }
}

ReactDOM.render(
  <Clock />,
  document.querySelector('.clock')
)