import { IProduct } from '@/types';
import React from 'react';

export function Description({ product }: { product: IProduct }) {
	return (
		<>
			<div className="mb-10">
				<h6 className="mb-6 text-2xl">Product Description</h6>
				<p>
					Wherever celebrations and good times happen, the LAY'S brand will be
					there just as it has been for more than 75 years. With flavors almost
					as rich as our history, we have a chip or crisp flavor guaranteed to
					bring a smile on your face.
				</p>
				<p>
					Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor,
					eleifend nunc a, lobortis neque. Praesent aliquam dignissim viverra.
					Maecenas lacus odio, feugiat eu nunc sit amet, maximus sagittis dolor.
					Vivamus nisi sapien, elementum sit amet eros sit amet, ultricies
					cursus ipsum. Sed consequat luctus ligula. Curabitur laoreet rhoncus
					blandit. Aenean vel diam ut arcu pharetra dignissim ut sed leo.
					Vivamus faucibus, ipsum in vestibulum vulputate, lorem orci convallis
					quam, sit amet consequat nulla felis pharetra lacus. Duis semper erat
					mauris, sed egestas purus commodo vel.
				</p>
			</div>
		</>
	);
}
