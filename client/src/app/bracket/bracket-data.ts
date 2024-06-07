export class BracketData {
    bracket_data:Array<MatchData[]> = [];

    // going to have to change this if we let them pick where to place things
    constructor(char_list:Array<string>) {
        var all_matches = [];
        for (let i = 0; i < char_list.length; i+=2) {
            all_matches.push(new MatchData(char_list[i], char_list[i+1]))
        }
        this.bracket_data.push(all_matches.slice(0, 4));
        this.bracket_data.push(all_matches.slice(4, 6));
        this.bracket_data.push(all_matches.slice(6, 7));
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

    getMatchVotes(round: number, match: number){
        this.bracket_data[round][match].getVotes();
    }

    updateVotes(round_num: number, match_num: number, char_num: number, votes: [number, number]){
        this.bracket_data[round_num][match_num].updateVotes(char_num, votes);
    }

    updateNextRound(round_num: number, match_num: number) {
        var winning_char = this.bracket_data[round_num][match_num].getWinning();
        this.bracket_data[round_num + 1][Math.floor(match_num/2)].updateChar(match_num%2, winning_char);
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
    updateVotes(char_num: number, votes: [number, number]){
        this.char1_votes = votes[0];
        this.char2_votes = votes[1];
    }

    updateChar(index: number, char: string){
        this.match_data[index] = char;
    }
}