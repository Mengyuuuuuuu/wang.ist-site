# 🔢 TCP vs. UDP – Vergleich der Ports & Funktionsweise

## 1️⃣ Überblick
TCP und UDP gehören zur **Transportschicht (OSI Layer 4)** und verwenden beide **Ports**, um Anwendungen eindeutig zu adressieren.  
Trotz gleicher Portnummern arbeiten beide Protokolle völlig unterschiedlich.

---

## 2️⃣ Gemeinsame Eigenschaften der Ports
| Bereich | Portnummer |
|--------|------------|
| Well-Known Ports | 0–1023 |
| Registered Ports | 1024–49151 |
| Dynamic / Private Ports | 49152–65535 |

✔ Gleicher Zahlenraum für TCP & UDP  
✔ Ports gehören zum **Transport Layer**, nicht zur Anwendungsschicht  
✔ Anwendungen „binden“ Ports über das jeweilige Protokoll (TCP/UDP)

---

## 3️⃣ Hauptunterschied: TCP-Port vs. UDP-Port

### 🔷 TCP-Port
- Verbindungsorientiert (3-Wege-Handshake)
- Zuverlässig: ACK, Retransmission
- Reihenfolge garantiert
- Stream-basiert

Typische Dienste:
- HTTP/HTTPS (80/443)
- SSH (22)
- FTP (21)
- SMTP (25)

---

### 🟩 UDP-Port
- Verbindungslos
- Keine Garantie für Reihenfolge oder Zustellung
- Datagramm-basiert
- Sehr geringe Latenz

Typische Dienste:
- DNS (53)
- DHCP (67/68)
- VoIP, Gaming, Streaming

---

## 4️⃣ Vergleichstabelle

| Kategorie | TCP | UDP |
|-----------|-----|-----|
| Verbindung | ✔ | ✖ |
| Zuverlässigkeit | ✔ | ✖ |
| Reihenfolge | ✔ | ✖ |
| Geschwindigkeit | Mittel | Hoch |
| Datentyp | Stream | Datagramme |
| Einsatz | Web, SSH, E-Mail | DNS, VoIP, Gaming |

---

## 5️⃣ Technische Beispiele

### TCP-Verbindung
```
ClientPort: 51422 → ServerPort: 443 (TCP)
```

### UDP-Abfrage (DNS)
```
ClientPort: 59122 → ServerPort: 53 (UDP)
```

---

## 6️⃣ Wichtige Erkenntnis
> **TCP-Port 80 und UDP-Port 80 sind nicht derselbe Port.**  
> Sie existieren im *gleichen Nummernraum*, aber in **getrennten Protokollräumen**.

---

## 7️⃣ Zusammenfassung

| Punkt | TCP | UDP |
|-------|------|------|
| OSI Layer | 4 | 4 |
| Ports | ✔ | ✔ |
| Zuverlässig | ✔ | ✖ |
| Verbindung | ✔ | ✖ |
| Typische Nutzung | Web, Login | DNS, Realtime |

---

## 📘 Fazit
> TCP-Ports stehen für Zuverlässigkeit – UDP-Ports für Geschwindigkeit.  
> Beide gehören zur Transportschicht, erfüllen aber völlig unterschiedliche Anforderungen.
