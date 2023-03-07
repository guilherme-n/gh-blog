export interface Posts {
	total_count: number;
	items: Post[];
}

interface Post {
	number: number;
	title: string;
	body: string;
	created_at: string;
}
