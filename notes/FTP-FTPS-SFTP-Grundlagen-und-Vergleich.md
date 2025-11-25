# FTP, FTPS und SFTP – Grundlagen, Funktionsweise und Sicherheitsvergleich
*Notizen im Rahmen der Netzwerk- und IT-Sicherheitsgrundlagen*

---

## 1. Einleitung
Das File Transfer Protocol (FTP) gehört zu den ältesten Protokollen für den Datenaustausch im Internet.  
Moderne Varianten wie **FTPS** und **SFTP** verbessern die Sicherheit, basieren jedoch auf völlig unterschiedlichen Technologien.  
Diese Notizen erklären die Funktionsweise, Ports, Sicherheitsmechanismen und typische Einsatzszenarien.

---

## 2. FTP (File Transfer Protocol)

### 2.1 Definition
FTP ist ein unverschlüsseltes, textbasiertes Protokoll, das ursprünglich 1971 entwickelt wurde, um Dateien zwischen Client und Server zu übertragen.

### 2.2 Eigenschaften
- **Protokollfamilie:** TCP/IP  
- **Standard-Port:**  
  - Kontrollkanal: **21**  
  - Datenkanal: **20** (aktiv) oder dynamische Ports (passiv)
- **Authentifizierung:** Klartext (Benutzername/Passwort)
- **Verschlüsselung:** ❌ Keine  
- **Sicherheitsrisiko:** Sehr hoch (Passwort-Sniffing, Man-in-the-Middle)

### 2.3 Betriebsmodi
#### **Aktiver Modus (Active Mode)**
- Client öffnet Port  
- Server verbindet sich zurück (Problem bei Firewalls)

#### **Passiver Modus (Passive Mode)**
- Server öffnet Ports  
- Client stellt beide Verbindungen her  
- **Standard im Webhosting**, firewall-freundlich

---

## 3. FTPS (FTP over TLS)

### 3.1 Definition
FTPS erweitert FTP um **TLS/SSL-Verschlüsselung**.  
Es bleibt technisch ein FTP-Protokoll, verwendet aber einen gesicherten Kontrollkanal.

### 3.2 Varianten von FTPS
| Variante | Beschreibung | Port |
|---------|--------------|------|
| **Explicit FTPS** | Client startet FTP auf Port 21 und „upgradet“ aktiv zur TLS-Verbindung | 21 |
| **Implicit FTPS** | Verbindung wird sofort verschlüsselt, kein Fallback | 990 |

### 3.3 Eigenschaften
- **Verschlüsselung:** ✔ TLS (wie HTTPS)  
- **Protokoll:** Erweiterung von FTP (zwei Kanäle)  
- **Kompatibilität:** Hohe Kompatibilität mit Shared Hosting  
- **Firewall:** Komplexer als SFTP wegen Datenkanal

### 3.4 Vorteile / Nachteile

| Vorteile | Nachteile |
|---------|-----------|
| TLS-Verschlüsselung | Komplizierte Firewall-Konfiguration |
| Weit verbreitet | Zwei getrennte Kanäle (Kontrolle/Daten) |
| Kompatibel mit Webhosting | Implementierung schwerer als SFTP |

---

## 4. SFTP (SSH File Transfer Protocol)

### 4.1 Definition
SFTP ist **kein FTP**, sondern ein Subsystem von **SSH (Secure Shell)**.  
Es nutzt **Port 22** und bietet Dateioperationen über einen verschlüsselten SSH-Tunnel.

### 4.2 Eigenschaften
- **Protokollfamilie:** SSH  
- **Port:** **22**  
- **Verschlüsselung:** ✔ Vollständige SSH-Verschlüsselung  
- **Authentifizierung:** Passwort oder SSH-Key  
- **Stabilität:** Nur 1 Verbindung → weniger Probleme mit Firewalls

### 4.3 Vorteile / Nachteile

| Vorteile | Nachteile |
|---------|-----------|
| Sehr sicher (SSH) | Nicht bei Shared Hosting verfügbar |
| Einfacher durch nur einen Kanal | Benötigt SSH-Zugriff |
| Ideal für Automatisierung, Skripte | Nicht kompatibel mit reinem FTP |

---

## 5. FTP vs FTPS vs SFTP – Übersicht

### 5.1 Vergleichstabelle

| Merkmal | FTP | FTPS | SFTP |
|---------|-----|------|-------|
| Verschlüsselung | ❌ Keine | ✔ TLS | ✔ SSH |
| Standard-Port | 21 | 21 / 990 | 22 |
| Protokoll | FTP | FTP + TLS | SSH Subsystem |
| Anzahl Verbindungen | 2 | 2 | 1 |
| Firewalls | Problematisch | Problematisch | Sehr gut |
| Verbreitung im Shared Hosting | Hoch | Hoch | Niedrig |
| Sicherheit | ❌ Niedrig | ✔ Mittel–Hoch | ✔✔ Sehr hoch |

---

## 6. Einsatzszenarien

### 6.1 FTP
- Alte Systeme  
- Interne Netzwerke ohne Sicherheitsanforderungen  
➡ **Für das Internet nicht empfohlen**

### 6.2 FTPS
- Webhosting (shared hosting)  
- Website-Verwaltung über FileZilla  
➡ **Best Choice**, wenn SSH nicht verfügbar

### 6.3 SFTP
- VPS / Root-Server  
- DevOps (Deployments, Automatisierungen)  
- Sicherer Datei­austausch  
➡ **Professionelle und sicherste Lösung**

---

## 7. Wie erkennt man, welche Variante der Hoster anbietet?

| Hoster zeigt an | Bedeutung |
|-----------------|-----------|
| „FTP Server: ftp.domain.com“ | FTP/FTPS |
| Port 21 | FTP oder FTPS |
| Port 990 | Implicit FTPS |
| Port 22 | SSH → SFTP verfügbar |
| `.ssh`-Ordner vorhanden | **Nicht zuverlässig!** Kein Beweis für SSH |
| SSH-Key Verwaltung | SFTP verfügbar |

---

## 8. Zusammenfassung
- **FTP ist unsicher** und sollte im Internet nicht mehr genutzt werden.  
- **FTPS (TLS)** ist die sicherere, weit verbreitete Variante für Shared Hosting.  
- **SFTP (SSH)** ist am sichersten und ideal für VPS und professionelle Deployments.  
- In FileZilla hängt der Download-/Upload-Ort von der jeweiligen linken/rechten Ansicht ab.  
- Für Webhosting wie clientcp ist FTPS der Standard, SFTP steht meist nicht zur Verfügung.

---

## Quellen
- https://www.filestash.app/what-is-ftp.html

*Ende der Notizen*
