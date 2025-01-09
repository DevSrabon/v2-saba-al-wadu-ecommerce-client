import React from 'react';

export const Banner = () => {
	return (
		<div className="relative w-full h-64 bg-rose-50 overflow-hidden rounded-lg">
			{/* Content Container */}
			<div className="flex justify-between items-center h-full px-8 md:px-12">
				{/* Left side content */}
				<div className="z-10">
					<h2 className="text-2xl md:text-4xl font-bold text-green-900 mb-4">
						Grab Upto 50% Off On
					</h2>
					<h3 className="text-xl md:text-3xl font-semibold text-green-900 mb-6">
						Selected Headphone
					</h3>
					<button className="bg-green-900 text-white px-6 py-2 rounded-md hover:bg-green-800 transition-colors">
						Buy Now
					</button>
				</div>

				{/* Right side image */}
				<div className="absolute right-0 h-full">
					<div className="relative h-full w-64 md:w-80">
						<img
							src="/api/placeholder/400/400"
							alt="Person wearing headphones"
							className="h-full object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
