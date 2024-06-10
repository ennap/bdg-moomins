import { Color } from "@svgdotjs/svg.js";

export class BracketData {
    bracket_data:Array<MatchData[]> = [];
    color_data: Array<string[][]> = [];

    // going to have to change this if we let them pick where to place things
    constructor(char_list:Array<string>, color_list:Array<string>) {
        var all_matches = [];
        for (let i = 0; i < char_list.length; i+=2) {
            all_matches.push(new MatchData(char_list[i], char_list[i+1]))
        }
        this.bracket_data.push(all_matches.slice(0, 4));
        this.bracket_data.push(all_matches.slice(4, 6));
        this.bracket_data.push(all_matches.slice(6, 7));

        var color_matches = [];
        for (let i = 0; i < color_list.length; i+=2) {
            color_matches.push([color_list[i], color_list[i+1]])
        }
        this.color_data.push(color_matches.slice(0, 4));
        this.color_data.push(color_matches.slice(4, 6));
        this.color_data.push(color_matches.slice(6, 7));

    }

    getRoundTotal(){
        return this.bracket_data.length;
    }

    getRound(round: number){
        return this.bracket_data[round];
    }

    getBracket(){
        return this.bracket_data;
    }

    getColor(round: number, match: number, item: number){
        return this.color_data[round][match][item];
    }

    getCharVote(round: number, match: number, item: number) {
        return this.bracket_data[round][match].getVotes()[item];
    }

    getCharString(round: number, match: number, item: number) {
        return this.bracket_data[round][match].getMatch()[item];
    }

    updateVotes(round_num: number, match_num: number, char_num: number, votes: [number, number]){
        this.bracket_data[round_num][match_num].updateVotes(char_num, votes);
    }

    updateNextRound(round_num: number, match_num: number) {
        var new_match = Math.floor(match_num/2);
        var new_item_index = match_num%2;

        var winning_char = this.bracket_data[round_num][match_num].getWinning();
        this.bracket_data[round_num + 1][new_match].updateChar(new_item_index, winning_char);

        this.color_data[round_num + 1][new_match][match_num%2] = this.getColor(round_num, match_num, this.bracket_data[round_num][match_num].getWinningItemIndex());
    }
}

export class MatchData {
    match_data: [string, string];
    match_total: number;
    char1_votes: number;
    char2_votes: number;

    constructor(char1_im: string, char2_im: string){
        this.match_total = 0;
        this.char1_votes = 0;
        this.char2_votes = 0;
        this.match_data = [char1_im, char2_im];
    }

    getMatch(){
        return this.match_data;
    }

    getVotes(){
        return [this.char1_votes, this.char2_votes]
    }

    getWinning(){
        if (this.char1_votes > this.char2_votes) {
            return this.match_data[0];
        }
        else {
            return this.match_data[1];
        }
    }

    getWinningItemIndex(){
        if (this.char1_votes > this.char2_votes) {
            return 0;
        }
        else {
            return 1;
        }
    }

    updateVotes(char_num: number, votes: [number, number]){
        this.char1_votes = votes[0];
        this.char2_votes = votes[1];
    }

    updateChar(index: number, char: string){
        this.match_data[index] = char;
    }
}