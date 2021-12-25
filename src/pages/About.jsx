import React, {useCallback, useEffect, useRef, useState} from 'react';
import Input from "../components/UI/input/Input";
import Button from "../components/UI/button/Button";

const About = () => {
	//debounce - событие происходит в конце действия
	const [debounceValue, setDebounceValue] = useState('')
	const changeHandler = useCallback( (e) => {
		setDebounceValue(e.target.value)
		searchData(e.target.value)
	})

	function useDebounce(callback, delay) {
		const timer = useRef(null)

		const debouncedCallback = useCallback((...args) => {
			if (timer.current) {
				clearTimeout(timer.current)
			}

			timer.current = setTimeout(() => {
				callback(...args)
			}, delay)

		}, [callback, delay])
		return debouncedCallback
	}

	const searchData = useDebounce((debounceValue) => {
		// const response = await axios.get('какой-то урл')
		// setState(response.data)
		console.log(debounceValue)
	}, 1000)


	// throttling - событие происходит с интервалом
	function useThrottle(callback, delay) {
		const isThrottled = useRef(null);

		const throttledCallback = useCallback((...args) => {
			if (isThrottled.current) {
				return
			}
			callback(args);
			isThrottled.current = true;
			setTimeout(() => isThrottled.current = false, delay)
		}, [callback, delay])
		return throttledCallback
	}

	const callback = useCallback(() => console.log('mouse'), [])
	const throttleMouseMove = useThrottle(callback, 1000)

	useEffect(() => {
			document.addEventListener('mousemove', throttleMouseMove)
			return () => document.removeEventListener('mousemove', throttleMouseMove)
		}, []	)

	return (
		<div className="App">
			<h1>Страница about</h1>
			<Input
				type="text"
				placeholder="debounce"
				value={debounceValue}
				onChange={changeHandler}
			/>
			<Button>Отправить</Button>
		</div>
	);
};

export default About;