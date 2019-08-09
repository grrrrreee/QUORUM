import threading,pyupbit, ccxt, pybithumb
import pandas as pd 

binance = ccxt.binance()
CC =[["Binance", "Bithumb", "Upbit"]]

def printit():
    ticker = binance.fetch_ticker('ETH/USDT')
    ticker2 = pybithumb.get_current_price("ETH")
    price = pyupbit.get_current_price("USDT-ETH")

    _ticker = float(ticker['close'])
    _price = float (price)
    _ticker2 = float (float(ticker2) / 1200)

    C = [_ticker, _ticker2, _price]
    big_one = max(C)
    small_one = min(C)
    difference = (big_one - small_one) / big_one * 100

    C = [_ticker, _ticker2, _price, difference]
    CC.append(C)
    threading.Timer(7.0, printit).start()

    # print(C)
    # print(CC)
    
    print(difference ,"%")
    if (difference > 1) : 
        A = "Emergency!"
        print(A)
    elif (difference > 0.5) :
        A = "Serious!"
        print(A)
    elif (difference > 0.35) :
        A = "Alert!"
        print(A)
    elif (difference > 0.3) :
        A = "Incoming!"
        print(A)
    elif (difference > 0.2) :
        A = "Serious!"
        print("Serious!")
    elif (difference > 0.15) :
        A = "Caution!"
        print(A)
    else :
        print("Normal")
    C.append(A)
    CC.append(C)
    print(CC)
    csvfile = pd.DataFrame(CC)
    csvfile.to_csv("/Users/bagminseo/Desktop/coding/Blockchain/Quoroum HACK/tools/file.csv")
    
printit()