import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { BracketData } from "./bracket/bracket-data";

@Injectable({
    providedIn: "root"
})
export class BracketService {
    bracket = new BracketData(['assets/avatar.jpeg', 'assets/danny-phantom.jpeg', 'assets/fairly-odd.jpeg', 'assets/kim-possible.jpg', 'assets/phineas-and-ferb.jpg', 'assets/powerpuff-girls.jpeg', 'assets/scooby-doo.jpg', 'assets/spongebob.jpg', 'assets/empty.png', 'assets/empty.png', 'assets/empty.png', 'assets/empty.png', 'assets/empty.png', 'assets/empty.png'], ['#0695A8','#5AB8C5','#FF2295','#B1D035','#E94A06','#DB4252', '#F5B226','#FEEF00','#FF3C38','#FF3C38','#FF3C38','#FF3C38','#FF3C38','#FF3C38']);
    bracket_serv = new BehaviorSubject(this.bracket)
    getBracket = this.bracket_serv.asObservable();
    
    winner_src = new BehaviorSubject('assets/empty.png');
    getWinnerSrc = this.winner_src.asObservable();

    current_round= new BehaviorSubject(0);
    getCurrentRound = this.current_round.asObservable();
    current_match= new BehaviorSubject(0);
    getCurrentMatch = this.current_match.asObservable();

    // will have to adjust votes to keep track of who's casting the votes too
    match_votes_1 = new BehaviorSubject(0);
    match_votes_2 = new BehaviorSubject(0);
    getMatchVote1 = this.match_votes_1.asObservable();
    getMatchVote2 = this.match_votes_2.asObservable();

    constructor(){}

    updateBracket(bracket: BracketData) {
        this.bracket_serv.next(bracket);
    }

    updateWinnerSrc(str: string){
        this.winner_src.next(str);
    }

    updateCurrentRound(num: number){
        this.current_round.next(num);
    }
    updateCurrentMatch(num: number){
        this.current_match.next(num);
    }
}