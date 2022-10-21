import GithubUser from './user'

export default interface ResponseGithubSearchUsers {
    incomplete_results: boolean;
    items: GithubUser[];
    total_count: number;
}