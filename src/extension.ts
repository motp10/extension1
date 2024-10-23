'use strict';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let FirstDisposable = vscode.commands.registerCommand('ReverseFor', function() {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const document = editor.document;
			const selection = editor.selection;
			const word = document.getText(selection);
			let cnt:number = 0;
			let wrd : string = "";
			let fstr:string = "";
			let sstr:string = "";
			let temp:string = "";
			let first: number = 0;
			let second: number = 0;
			for (var i = 0; i < word.length; i++) {
				if (first !== 0 && second !== 0) {
					if (word[i] === '+') {
						wrd = wrd + '-';
					} else if (word[i] === '-') {
						wrd = wrd + '+';
					} else {
						wrd = wrd + word[i];
					}
				} else {
					wrd = wrd + word[i];
				}
				if (word[i] === '=' && fstr ==="") {
					first = i + 1;
					while (word[first] !== ';') {
						fstr = fstr + word[first];
						first++;
					}
					i = first - 1;
					wrd = wrd + "/strt";
				} else if (word[i] === '<') {
					wrd = wrd.replace('<','>');
					if (word[i + 1] === '=') {
						wrd = wrd + '=';
						second = i + 2;
						while (word[second] !== ';') {
							sstr = sstr + word[second];
							second++;
						}
						wrd = wrd + "/fin";
						i = second - 1;
					} else {
						second = i + 1;
						while (word[second] !== ';') {
							sstr = sstr + word[second];
							second++;
						}
						temp = ' - 1';
						wrd = wrd + "= /fin";
						i = second - 1;
					}
				} else if (word[i] === '>') {
					wrd = wrd.replace('>','<');
					if (word[i + 1] === '=') {
						wrd = wrd + "=";
						second = i + 2;
						while (word[second] !== ';') {
							sstr = sstr + word[second];
							second++;
						}
						wrd = wrd + "/fin";
						i = second - 1;
					} else {
						second = i + 1;
						while (word[second] !== ';') {
							sstr = sstr + word[second];
							second++;
						}
						wrd = wrd + "= /fin";
						i = second - 1;
						temp = ' + 1';
					}
				}
			}
			wrd = wrd.replace("/strt",sstr + temp);
			wrd = wrd.replace("/fin",fstr);
			const reversed = wrd;
			editor.edit(editBuilder => {
				editBuilder.replace(selection, reversed);
			});
		}
	});
	let SecondDisposable = vscode.commands.registerCommand('ChangeCout', function() {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const document = editor.document;
			const selection = editor.selection;
			const word = document.getText(selection);
			let wrd:string = word;
            let cnt:number = 0;
            for (var i = 0; i < word.length; i++) {
                if (word[i] === '<' && word[i + 1] ==='<') {
                    if (cnt > 0) {
                        wrd = wrd + word[i] + word[i + 1] + "\' \'<";
                        i += 1;
                    } else {
                        cnt++;
                    }
                }
                wrd = wrd + word[i];
            }
            if (wrd[wrd.length - 1] === ';') {
                wrd = wrd.slice(0, -1) + "<<\'\\n\';";
            }
			const reversed = wrd.slice(word.length,wrd.length);
			editor.edit(editBuilder => {
				editBuilder.replace(selection, reversed);
			});
		}
	});
	context.subscriptions.push(FirstDisposable);
	context.subscriptions.push(SecondDisposable);
}
exports.activate = activate;