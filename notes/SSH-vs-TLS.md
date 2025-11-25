# 🛡️ Vergleich der Verschlüsselungsmethoden: **SSH vs. SSL/TLS**

## 1️⃣ Überblick
Sowohl **SSH** als auch **SSL/TLS** verschlüsseln Daten über unsichere Netzwerke.  
Trotzdem unterscheiden sie sich deutlich in Aufbau, Einsatzgebiet, Authentifizierung und Protokollschicht.

---

## 2️⃣ Grundidee beider Protokolle

### **SSH (Secure Shell)**
- Anwendungsprotokoll (OSI Layer 7)
- Sicheres Remote-Login, Dateiübertragung, Tunneling
- Standardport: **22**
- Integrierte Verschlüsselung + Benutzer-Authentifizierung

### **SSL/TLS (Secure Sockets Layer / Transport Layer Security)**
- Sicherheitsschicht zwischen Transport- und Anwendungsschicht (OSI Layer 4.5)
- Absicherung von Web-, Mail- und API-Diensten
- Standardport (HTTPS): **443**
- Ergänzt vorhandene Protokolle um Verschlüsselung

---

## 3️⃣ Gemeinsame kryptographische Prinzipien

Beide nutzen:

- **Asymmetrische Kryptographie**  
  → Schlüsselaustausch (meist Diffie-Hellman / ECDHE)
- **Symmetrische Kryptographie**  
  → Datenverschlüsselung (AES, ChaCha20)
- **Integritätsschutz**  
  → MAC/HMAC oder AEAD

➡️ **Beide verschlüsseln sowohl Kanal als auch Daten.**

---

## 4️⃣ Unterschiede im Handshake

### 🔐 **SSH Handshake**
1. Algorithmus-Aushandlung  
2. Diffie-Hellman → gemeinsamer Session Key  
3. Server-Authentifizierung über **Host Key**  
4. Client-Authentifizierung (Password oder Public Key)

### 🔐 **TLS Handshake**
1. Server sendet **X.509-Zertifikat**  
2. Client überprüft CA-Signatur  
3. DH/ECDHE → Session Key  
4. Ab dann verschlüsselte HTTP/SMTP/... Kommunikation

➡️ Der Hauptunterschied: **SSH vertraut auf Host Keys, TLS auf CAs.**

---

## 5️⃣ Authentifizierungsmodelle

| Merkmal | **SSH** | **TLS/SSL** |
|---------|---------|-------------|
| Server-Identität | Host Key | Zertifikat (CA-signiert) |
| Client-Identität | Meist Public-Key | Selten (Client-Zertifikat) |
| Vertrauen basiert auf | known_hosts | Certificate Authority |
| Benötigte Infrastruktur | Keine PKI | PKI erforderlich |

➡️ **SSH = Peer-to-Peer Trust**  
➡️ **TLS = Third-Party Trust**

---

## 6️⃣ Einsatzgebiete

| Bereich | **SSH** | **TLS** |
|---------|----------|--------|
| Remote-Login | ✔ | ✖ |
| Web-Browsing | ✖ | ✔ |
| Dateiübertragung | SFTP/SCP | FTPS/HTTPS |
| Port-Forwarding | Sehr stark | Möglich, aber selten |
| API-Sicherheit | Weniger üblich | Standard |

---

## 7️⃣ Verschlüsselungsalgorithmen

### SSH
- Key Exchange: curve25519-sha256, ecdh-sha2-nistp256  
- Symmetrisch: AES-256-CTR, ChaCha20-Poly1305  
- MAC: hmac-sha2-256

### TLS
- Key Exchange: ECDHE  
- Symmetrisch: AES-GCM, ChaCha20-Poly1305  
- Zertifikate: RSA, ECDSA

---

## 8️⃣ Zusammenfassung

### Gemeinsamkeiten
- Session-Key-Aushandlung über asymmetrische Kryptographie  
- Symmetrische Verschlüsselung für Nutzdaten  
- Integritätsschutz vorhanden  
- Verschlüsselung des gesamten Kommunikationskanals

### Unterschiede
- **SSH = Anwendungsprotokoll mit Benutzer-Authentifizierung**  
- **TLS = universelle Verschlüsselungsschicht für andere Protokolle**  
- **SSH nutzt Host Keys**, **TLS nutzt CA-Zertifikate**  
- **SSH ohne PKI**, **TLS abhängig von PKI**

---

## 📝 Kurzfazit
> **SSH schützt Remote-Zugriff und administrative Operationen.  
> TLS schützt Webdienste und Internetanwendungen.  
> Beide verschlüsseln, aber ihr Vertrauensmodell, ihre Architektur und ihre Einsatzgebiete sind grundverschieden.**
