import { useEffect } from "react";

const startEffect = (element) => {
	const letters = "ABCDEFGHIJKLMNOPQRSTWVUXYZ";
	let iterations = 0;

	const interval = setInterval(() => {
		element.innerText = element.innerText
			.split("")
			.map((letter, index) => {
				if (index < iterations) {
					return element.dataset.value[index];
				}
				return letters[Math.floor(Math.random() * 26)];
			})
			.join("");

		if (iterations >= 11) clearInterval(interval);
		iterations += 1 / 3;
	}, 30);
};

export const useHeaderEffect = (headers) => {
	headers = [headers.children[0], headers.children[1]];

	const intervals = [];
	headers.forEach((header, index) => {
		setTimeout(() => {
			startEffect(header);
		}, 1300);
	});
	setTimeout(() => {
		const interval = setInterval(() => {
			headers.forEach((header) => {
				startEffect(header);
			});
		}, 7000);
		intervals.push(interval);
	}, 1300);
	return () => {
		intervals.forEach(clearInterval);
		console.log(intervals);
	};
};
