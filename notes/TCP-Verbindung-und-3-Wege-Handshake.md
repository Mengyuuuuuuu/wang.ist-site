# 🔗 TCP-Verbindung & 3-Wege-Handshake

## 1️⃣ Überblick
TCP (Transmission Control Protocol) ist ein **verbindungsorientiertes**, **zuverlässiges** Transportprotokoll auf **OSI-Schicht 4**.  
Bevor Daten übertragen werden können, muss eine **TCP-Verbindung aufgebaut** werden – dieser Vorgang heißt:

> **3-Wege-Handshake (Three-Way Handshake)**

Er stellt sicher, dass sowohl Client als auch Server bereit sind zu kommunizieren und dass die **Start-SEQ-Nummern** synchronisiert werden.

---

## 2️⃣ Merkmale von TCP

| Merkmal | Beschreibung |
|---------|--------------|
| 🔗 Verbindungsorientiert | Zuverlässige Verbindung zwischen Client und Server |
| 📦 Zuverlässig | ACK-Bestätigungen, erneutes Senden verlorener Pakete |
| 📶 Geordnet | Garantierte Reihenfolge |
| 📌 Flusskontrolle | Verhindert Überlastung |
| 🧱 Fehlererkennung | Prüfsummen für Datenintegrität |

---

## 3️⃣ Bedeutung von SEQ & ACK

### 🔢 SEQ (Sequence Number)
- Startnummer eines TCP-Datenstroms
- Zufällig gewählt (Schutz vor alten Verbindungen)

### 🔁 ACK (Acknowledgement Number)
- Bestätigt: *„Ich habe alles bis zu Byte X erhalten, bitte sende ab X+1!“*

---

## 4️⃣ Der 3-Wege-Handshake

### 🔽 Schritt 1: Client → Server (SYN)
```
SYN = 1
Seq = x
```

### 🔽 Schritt 2: Server → Client (SYN/ACK)
```
SYN = 1
ACK = x + 1
Seq = y
```

### 🔽 Schritt 3: Client → Server (ACK)
```
ACK = y + 1
```

➡️ **Verbindung aufgebaut!**

---

## 5️⃣ Grafische Darstellung

```
Client                            Server
  |                                 |
  | ------ SYN (Seq = x) ---------> |
  |                                 |
  | <--- SYN/ACK (Seq = y, Ack=x+1) |
  |                                 |
  | ----- ACK (Ack = y+1) --------> |
  |                                 |
Verbindung aufgebaut ✔
```

---

## 6️⃣ Warum drei Schritte?

- Beide Seiten müssen erreichbar sein  
- Start-Seq-Nummern müssen synchronisiert werden  
- Senderichtung und Empfangsrichtung werden getrennt bestätigt → **Vollduplex**

---

## 7️⃣ Verbindung beenden – 4-Wege-Handshake

1. Client → Server: FIN  
2. Server → Client: ACK  
3. Server → Client: FIN  
4. Client → Server: ACK

---

## 8️⃣ Wichtige Begriffe

- **SYN Flood** (DoS-Angriff)  
- **TIME-WAIT** Zustand (~60 Sekunden nach Verbindung)  
- **Window Size** (Flow Control)

---

## 9️⃣ Zusammenfassung

| Punkt | Erklärung |
|-------|-----------|
| Protokoll | TCP (Transport Layer) |
| Verbindungsaufbau | 3-Wege-Handshake |
| Zuverlässigkeit | SEQ + ACK |
| Verbindungsende | 4-Wege-Handshake |

---

## 📘 Kurzfazit
> **Der 3-Wege-Handshake stellt sicher, dass beide Seiten bereit sind, synchronisierte Sequenznummern haben und zuverlässig kommunizieren können.**
